import { useState } from "react";
import styles from "./RandomClothes.module.css";
import SmallCard from "../../Card/SmallCard/SmallCard";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import { IProduct, IRandomClothesProps } from "../../../types/common";

/**
 * Отображение списка случайных товаров на странице Home.
 *
 * @param {IProduct[]} products - Список всех товаров.
 */
const RandomClothes = ({ products }: IRandomClothesProps): JSX.Element => {
  const [isActiveMan, setIsActiveMan] = useState<boolean>(true); // Состояния, для отображения товаров (мужские или женские)

  // Фильтрация продуктов в зависимости от выбранного пола (мужчины или женщины)
  const filteredProducts: IProduct[] = products
    ? products.filter(
        (product: IProduct) =>
          product.gender === (isActiveMan ? "Male" : "Female")
      )
    : [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperButtons}>
        <span
          className={`${styles.button} ${
            isActiveMan ? styles.activeButton : styles.deactiveButton
          } ${styles.size}`}
          onClick={() => setIsActiveMan(!isActiveMan)}
        >
          Мужчинам
        </span>

        <span
          className={`${styles.button} ${
            isActiveMan ? styles.deactiveButton : styles.activeButton
          } ${styles.size}`}
          onClick={() => setIsActiveMan(!isActiveMan)}
        >
          Женщинам
        </span>
      </div>

      <div className={styles.wrapperCards}>
        <div className={styles.wrapperSmallCards}>
          {filteredProducts.map((product: IProduct) => (
            <SmallCard {...product} key={product.id} />
          ))}
        </div>

        <a href="" className={styles.link}>
          Смотреть все <RightOutlined />
        </a>
      </div>
    </div>
  );
};

export default RandomClothes;

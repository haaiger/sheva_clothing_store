import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RandomClothes.module.css";
import SmallCard from "../../Card/SmallCard/SmallCard";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import { IProduct } from "../../../types/common";

const RandomClothes = ({ products }: { products: IProduct[] | null }) => {
  const [isActiveMan, setIsActiveMan] = useState<boolean>(true);

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
          {products &&
            products.length > 0 &&
            products.map((card: IProduct) => (
              <SmallCard {...card} key={card.id} />
            ))}
        </div>

        <div className={styles.button}>
          Смотреть все <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default RandomClothes;

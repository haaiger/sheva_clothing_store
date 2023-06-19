import { Button } from "antd";
import SizeCard from "../Size/Size";
import Stars from "../Stars/Stars";
import styles from "./DescriptionFullCard.module.css";
import { IDescriptionFullCardProps } from "../../types/types";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import InfoDropdown from "./InfoDropdown/InfoDropdown";

// Примеры характеристик
const features = [
  { id: 1, name: "Страна", composition: "Россия" },
  { id: 2, name: "Состав", composition: "Кашемир" },
];

/**
 * Компонент DescriptionFullCard представляет собой полное описание товара.
 * Он принимает следующие свойства:
 * @param {number} rating - Рейтинг товара.
 * @param {() => void} setRating - Функция для установки рейтинга товара.
 * @param {string} activeSize - Активный размер товара.
 * @param {() => void} handleSizeClick - Обработчик клика по размеру товара.
 * @param {object} product - Объект с информацией о товаре.
 *
 * Компонент отображает полное описание товара, включая название, цену, описание,
 * размеры, кнопки действий, характеристики и отзывы.
 */
const DescriptionFullCard = ({
  rating,
  setRating,
  activeSize,
  handleSizeClick,
  product,
}: IDescriptionFullCardProps): JSX.Element => {
  const {
    productName,
    description,
    price,
    size,
    color,
    category,
    brand,
    count,
  } = product || {};

  // size приходит строкой, чтобы правильно выводить превращаем в массив строк.
  // Преобразование строки размеров в массив строк
  const sizeArray: string[] = size ? size.split(",") : [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperStars}>
        <Stars value={rating} onChange={setRating} disabled />
        <div>(0)</div>
      </div>

      <h1 className={styles.header}>{productName}</h1>

      <div className={styles.price}>
        <span>{price} ₽</span>
      </div>

      <span>{description}</span>

      <div>
        <span>Размер</span>
      </div>

      <div className={styles.wrapperSizes}>
        {sizeArray.map((item: string) => (
          <SizeCard
            key={item}
            size={item}
            active={activeSize === item}
            onClick={() => handleSizeClick(item)}
          />
        ))}
      </div>

      <div className={styles.wrapperButtons}>
        <Button className={styles.cart} style={{ padding: 28 }}>
          В корзину
        </Button>
        <Button
          className={styles.favorite}
          icon={<HeartOutlined />}
          style={{ padding: 28 }}
        ></Button>
      </div>

      <InfoDropdown title="Характеристики" info={features} />

      <InfoDropdown title="Отзывы" info={features} />
    </div>
  );
};

export default DescriptionFullCard;

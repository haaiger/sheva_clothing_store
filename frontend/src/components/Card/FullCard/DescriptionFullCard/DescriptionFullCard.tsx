import { Button } from "antd";
import SizeCard from "../Size/Size";
import Stars from "../Stars/Stars";
import styles from "./DescriptionFullCard.module.css";
import { IDescriptionFullCardProps } from "../../types/types";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import InfoDropdown from "./InfoDropdown/InfoDropdown";

const features = [
  { id: 1, name: "Страна", composition: "Россия" },
  { id: 2, name: "Состав", composition: "Кашемир" },
];

const size: string[] = ["S", "M", "L", "XL"];

const DescriptionFullCard = ({
  rating,
  setRating,
  activeSize,
  handleSizeClick,
}: IDescriptionFullCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperStars}>
        <Stars value={rating} onChange={setRating} disabled />
        <div>(0)</div>
      </div>

      <h1 className={styles.header}>Пальто кашемировое</h1>

      <div className={styles.price}>
        <span>15 490 ₽</span>
      </div>

      <div>
        <span>Размер</span>
      </div>

      <div className={styles.wrapperSizes}>
        {size.map((item: string) => (
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
        <Button className={styles.favorite} icon={<HeartOutlined />} style={{ padding: 28 }}></Button>
      </div>

      <InfoDropdown title="Характеристики" info={features} />

      <InfoDropdown title="Отзывы" info={features} />
    </div>
  );
};

export default DescriptionFullCard;
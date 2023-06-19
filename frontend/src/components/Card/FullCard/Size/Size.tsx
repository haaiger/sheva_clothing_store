import { ISizeCard } from "../../types/types";
import styles from "./Size.module.css";

/**
 * Компонент Size представляет собой элемент размера товара.
 * Он принимает следующие свойства:
 * @param {string} size - Размер товара.
 * @param {boolean} active - Флаг, указывающий, является ли размер активным.
 * @param {() => void} onClick - Обработчик клика по размеру.
 */
const Size = ({ size, active, onClick }: ISizeCard): JSX.Element => {
  const handleClick = (): void => {
    if (onClick) {
      onClick(size);
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${styles.button} ${
        active ? styles.active : styles.deactive
      }`}
      onClick={handleClick}
    >
      <span className={styles.text}>{size}</span>
    </div>
  );
};

export default Size;

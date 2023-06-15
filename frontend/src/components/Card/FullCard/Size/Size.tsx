import { ISizeCard } from "../../types/types";
import styles from "./Size.module.css";

const Size = ({ size, active, onClick }: ISizeCard): JSX.Element => {
  const handleClick = () => {
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

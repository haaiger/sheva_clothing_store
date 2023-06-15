import { useState } from "react";
import styles from "./RandomClothes.module.css";
import SmallCard from "../../Card/SmallCard/SmallCard";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";

const RandomClothes = () => {
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
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>

        <div className={styles.button}>
          Смотреть все <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default RandomClothes;

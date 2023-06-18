import styles from "./Footer.module.css";
import LinkedIn from "../../public/photo/social/LinkedIn.jpg";
import Telegram from "../../public/photo/social/Telegram.jpg";
import VK from "../../public/photo/social/VK.jpg";

/**
 * Компонент Footer представляет подвал страницы.
 */
const Footer = (): JSX.Element => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapperSocials}>
        <a
          href="https://www.linkedin.com/in/artem-shevchenko-57197b265/"
          className={styles.link}
        >
          <img src={LinkedIn} alt="LinkedIn" className={styles.image} />
        </a>

        <a href="https://t.me/tm_sheva" className={styles.link}>
          <img src={Telegram} alt="Telegram" className={styles.image} />
        </a>

        <a href="https://vk.com/tmsheva" className={styles.link}>
          <img src={VK} alt="VK" className={styles.image} />
        </a>
      </div>

      <div className={styles.commerce}>
        <span className={styles.text}>
          © 2023 Любое использование контента без письменного разрешения
          запрещено ;)
        </span>

        <span className={styles.text}>Интернет-магазин создан @tm_sheva</span>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import UnorderedListOutlined from "@ant-design/icons/lib/icons/UnorderedListOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import styles from "./Navbar.module.css";
import LeftPanel from "../ LeftPanel/LeftPanel";
import FavoriteIcon from "./FavoriteIcon/FavoriteIcon";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon";

/**
 * Компонент Navbar представляет навигационную панель.
 */
const Navbar = (): JSX.Element => {
  const [isShowLeftPanel, setIsShowLeftPanel] = useState<boolean>(false); // Отображение меню (навигация) слева

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div
            className={`${styles.menu} ${styles.button}`}
            onClick={() => setIsShowLeftPanel(true)}
          >
            <UnorderedListOutlined />
            <span>Меню</span>
          </div>
        </div>

        <div className={styles.center}>
          <a href="/" className={styles.title}>
            SHEVA
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.searchInputWrapper}>
            <SearchOutlined
              className={styles.button}
              onClick={() => (window.location.href = "/search")}
            />
          </div>

          <LineChartOutlined className={styles.button} />
          <FavoriteIcon />
          <ShoppingCartIcon />
        </div>

        {isShowLeftPanel && <LeftPanel handlePanel={setIsShowLeftPanel} />}
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;

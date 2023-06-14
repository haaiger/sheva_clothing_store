import { useState } from "react";
import UnorderedListOutlined from "@ant-design/icons/lib/icons/UnorderedListOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import styles from "./Navbar.module.css";
import LeftPanel from "../ LeftPanel/LeftPanel";

const Navbar = () => {
  const [isShowLeftPanel, setIsShowLeftPanel] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.left} ${styles.button}`}
        onClick={() => setIsShowLeftPanel(true)}
      >
        <UnorderedListOutlined />
        <span>Меню</span>
      </div>

      <div className={styles.center}>
        <span>SHEVA</span>
      </div>

      <div className={styles.right}>
        <SearchOutlined className={styles.button} />
        <LineChartOutlined className={styles.button} />
        <HeartOutlined className={styles.button} />
        <ShoppingCartOutlined className={styles.button} />
      </div>

      {isShowLeftPanel && <LeftPanel handlePanel={setIsShowLeftPanel} />}
    </div>
  );
};

export default Navbar;

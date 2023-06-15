import { useState } from "react";
import UnorderedListOutlined from "@ant-design/icons/lib/icons/UnorderedListOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import { Input } from "antd";
import styles from "./Navbar.module.css";
import LeftPanel from "../ LeftPanel/LeftPanel";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isShowLeftPanel, setIsShowLeftPanel] = useState<boolean>(false);
  const [isShowSearchInput, setIsShowSearchIn] = useState<boolean>(false);

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
          <div className={styles.center}>
            <span>SHEVA</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.searchInputWrapper}>
            {isShowSearchInput ? (
              <Input
                className={styles.searchInput}
                size="large"
                style={{
                  visibility: isShowSearchInput ? "visible" : "hidden",
                }}
                addonAfter={
                  <CloseCircleOutlined
                    className={styles.button}
                    onClick={() => setIsShowSearchIn(false)}
                  />
                }
                addonBefore={
                  <SearchOutlined
                    className={styles.button}
                    onClick={() => setIsShowSearchIn(true)}
                  />
                }
              />
            ) : (
              <SearchOutlined
                className={styles.button}
                onClick={() => setIsShowSearchIn(true)}
              />
            )}
          </div>

          <LineChartOutlined className={styles.button} />
          <HeartOutlined className={styles.button} />
          <ShoppingCartOutlined className={styles.button} />
        </div>

        {isShowLeftPanel && <LeftPanel handlePanel={setIsShowLeftPanel} />}
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;

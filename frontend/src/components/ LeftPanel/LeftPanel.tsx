import React, { useEffect, useState } from "react";
import { Divider, Drawer } from "antd";
import styles from "./LeftPanel.module.css";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import { ILeftPanelProps } from "./types";

/**
 * Компонент LeftPanel представляет боковую панель меню слева.
 *
 * @param {() => void} handlePanel - Функция обработчик для закрытия панели.
 */
const LeftPanel: React.FC<ILeftPanelProps> = ({
  handlePanel,
}: ILeftPanelProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleClose = (): void => {
    handlePanel(false);
  };

  useEffect(() => {
    const getToken = localStorage.getItem('token'); 
    console.log(Boolean(getToken));   
    if (getToken) {
      setIsAuth(true);
    }
  }, [])

  return (
    <Drawer
      title={
        <div className={styles.header}>
          <span>Меню</span>
          <CloseCircleOutlined
            className={styles.closeButton}
            onClick={handleClose}
          />
        </div>
      }
      placement="left"
      closable={false}
      open={true}
      maskClosable={true}
      onClose={handleClose}
    >
      <div className={styles.top}>
        <span className={styles.subtitle}>Навигация</span>

        <p>
          <a href="/catalog" className={styles.link}>
            Каталог
          </a>
        </p>
        <p>
          <a href="/about-us" className={styles.link}>
            О компании
          </a>
        </p>
        <p>
          <a href="/contacts" className={styles.link}>
            Контакты
          </a>
        </p>
        <p>Доставка [не активна]</p>
        <p>Оплата [не активна]</p>
        <p>
          {isAuth ? (
            <a href="/office" className={styles.link}>
              Личный кабинет
            </a>
          ) : (
            <a href="/login" className={styles.link}>
              Авторизоваться
            </a>
          )}
        </p>
      </div>

      <Divider />

      <div className={styles.center}>
        <span className={styles.subtitle}>Контакты</span>

        <p>+7(985) 586-44-54</p>

        <p>г. Клин, ул. Дурыманова, 47</p>
      </div>

      <Divider />

      <div className={styles.bottom}>
        <InstagramOutlined className={styles.button} />
      </div>
    </Drawer>
  );
};

export default LeftPanel;

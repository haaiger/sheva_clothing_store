import React, { Dispatch, SetStateAction } from "react";
import { Divider, Drawer } from "antd";
import styles from "./LeftPanel.module.css";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";

interface ILeftPanel {
  handlePanel: Dispatch<SetStateAction<boolean>>;
}

const LeftPanel: React.FC<ILeftPanel> = ({ handlePanel }: ILeftPanel) => {
  const handleClose = () => {
    handlePanel(false);
  };

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

        <p className={styles.button}>Каталог</p>
        <p className={styles.button}>О компании</p>
        <p className={styles.button}>Контакты</p>
        <p className={styles.button}>Доставка</p>
        <p className={styles.button}>Оплата</p>
        <p className={styles.button}>Личный кабинет</p>
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

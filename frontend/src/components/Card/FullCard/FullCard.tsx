import { Card } from "antd";
import styles from "./FullCard.module.css";
import { Button } from "antd";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";

const FullCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperList}>
        <ul className={styles.list}>
          <li className={`${styles.listElement} ${styles.button}`}>Главная</li>
          <li className={styles.listElement}>/</li>
          <li className={`${styles.listElement} ${styles.button}`}>Женщинам</li>
        </ul>
      </div>

      <div className={styles.content}>
        <Card
          bodyStyle={{ padding: "0" }}
          hoverable
          style={{ width: 700 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Button
            type="dashed"
            shape="circle"
            icon={<LineChartOutlined />}
            size="large"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1,
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default FullCard;

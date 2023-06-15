import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./InfoDropdown.module.css";
import { useState } from "react";
import { IInfo, IInfoDropdownProps } from "../../../types/types";

const InfoDropdown = ({ title, info }: IInfoDropdownProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.wrapperButtons} ${styles.button}`}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
        {isActive ? <UpOutlined /> : <DownOutlined />}
      </div>

      {isActive && (
        <div className={styles.wrapperSections}>
          {info.map((item: IInfo) => (
            <div className={styles.section} key={item.id}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.composition}>{item.composition}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoDropdown;

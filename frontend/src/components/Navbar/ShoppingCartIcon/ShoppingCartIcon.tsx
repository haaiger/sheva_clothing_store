import { useState } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./ShoppingCartIcon.module.css";

/**
 *  Компонент иконки товаров на покупку.
 *
 * ! TODO: реализоватьфункционал товара для покупки.
 */
const ShoppingCartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Badge count={cartCount} className={styles.wrapper}>
      <ShoppingCartOutlined className={styles.button} />
    </Badge>
  );
};

export default ShoppingCartIcon;

import { useState, useEffect } from "react";
import Badge from "antd/lib/badge";
import { HeartOutlined } from "@ant-design/icons";
import styles from "./FavoriteIcon.module.css";

/**
 * Компонент иконки избранного.
 */
const FavoriteIcon = (): JSX.Element => {
  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteCount(favorites.length || 0);
  }, []);

  return (
    <Badge count={favoriteCount} className={styles.wrapper}>
      <HeartOutlined onClick={() => (window.location.href = "/favorites")} />
    </Badge>
  );
};

export default FavoriteIcon;

import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";
import { ISmallCardProps } from "../types/types";
import HeartFilled from "@ant-design/icons/lib/icons/HeartFilled";

const { Meta } = Card;

const SmallCard: React.FC<ISmallCardProps> = ({
  id,
  productName,
  price,
  photos,
}: ISmallCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    // Проверка наличия id карточки в localStorage при загрузке компонента
    const existingFavorites = localStorage.getItem("favorites");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const truncatedProductName =
    productName.length > 18
      ? productName.slice(0, 18).trim() + "..."
      : productName;

  const handleHeartButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Остановить всплытие события

    // Получение существующих избранных товаров из localStorage
    const existingFavorites = localStorage.getItem("favorites");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    // Проверка, находится ли id карточки уже в избранных
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      // Удаление id карточки из избранных в localStorage
      const updatedFavorites = favorites.filter(
        (favoriteId: number) => favoriteId !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      console.log("Карточка удалена из избранного:", updatedFavorites);
    } else {
      // Добавление id карточки в избранное в localStorage
      const updatedFavorites = [...favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      console.log("Карточка добавлена в избранное:", updatedFavorites);
    }
  };

  const handleShoppingButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Остановить всплытие события
  };

  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="example" src={photos[0]} />}
      onClick={() => {
        window.location.href = `/full/${id}`;
      }}
    >
      <Button
        type="dashed"
        shape="circle"
        icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
        size="large"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10,
        }}
        onClick={handleHeartButtonClick}
      />
      <Button
        type="dashed"
        shape="circle"
        icon={<ShoppingOutlined />}
        size="large"
        style={{
          position: "absolute",
          bottom: "25px",
          right: "10px",
          zIndex: 1,
        }}
        onClick={handleShoppingButtonClick}
      />
      <Meta title={truncatedProductName} description={`${price} ₽`} />
    </Card>
  );
};

export default SmallCard;

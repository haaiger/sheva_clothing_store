import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";
import HeartFilled from "@ant-design/icons/lib/icons/HeartFilled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ISmallCardProps } from "../types/types";

const { Meta } = Card;

/**
 * Компонент SmallCard представляет карточку товара в уменьшенном формате.
 *
 * @param {number} id - Идентификатор карточки товара.
 * @param {string} productName - Название товара.
 * @param {number} price - Цена товара.
 * @param {string[]} photos - Массив фотографий товара.
 */
const SmallCard: React.FC<ISmallCardProps> = ({
  id,
  productName,
  price,
  photos,
}: ISmallCardProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // Состояние активности кнопки товара в избранном

  useEffect(() => {
    // Проверка наличия id карточки в localStorage при загрузке компонента
    const existingFavorites = localStorage.getItem("favorites");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  // Сокращение тайтла для карточки, если больше 18 символов
  const truncatedProductName: string =
    productName.length > 18
      ? productName.slice(0, 18).trim() + "..."
      : productName;

  // Хэндлер на нажатие кнопки добавление/удаления избранного
  const handleHeartButtonClick = (event: React.MouseEvent): void => {
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
      toast.error("Карточка удалена из избранного");
    } else {
      // Добавление id карточки в избранное в localStorage
      const updatedFavorites = [...favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      toast.success("Карточка добавлена в избранное");
    }
  };

  // Хэндлер на нажатие кнопки добавления в карзину
  const handleShoppingButtonClick = (event: React.MouseEvent): void => {
    event.stopPropagation();
  };

  return (
    <>
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
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default SmallCard;

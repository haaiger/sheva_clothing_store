import React, { useState } from "react";
import { IStarProps } from "../../types/types";

/**
 * Компонент Stars представляет собой оценку в виде звезд.
 * Он принимает следующие свойства:
 * @param {number} id - Идентификатор карточки товара.
 * @param {string} productName - Название товара.
 * @param {number} price - Цена товара.
 * @param {string[]} photos - Массив фотографий товара.
 * Он позволяет пользователю выбрать оценку, а также отображает текущую оценку.
 */
const Stars: React.FC<IStarProps> = ({
  value,
  onChange,
  disabled,
  size,
}: IStarProps): JSX.Element => {
  const [hoverValue, setHoverValue] = useState<number | null>(null); // Состояние для хранения значения оценки при наведении на звезды
  const stars: number[] = [1, 2, 3, 4, 5];

  // Обработчик события при наведении указателя мыши на звезду
  const handleMouseEnter = (star: number): void => {
    if (!disabled) {
      setHoverValue(star);
    }
  };

  // Обработчик события при выходе указателя мыши из области звезд
  const handleMouseLeave = (): void => {
    if (!disabled) {
      setHoverValue(null);
    }
  };

  // Обработчик события при клике на звезду
  const handleClick = (star: number): void => {
    if (!disabled) {
      onChange(star);
    }
  };

  return (
    <div>
      {stars.map((star: number) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: disabled ? "default" : "pointer",
            color: (hoverValue || value) >= star ? "gold" : "gray",
            fontSize: size ? size : 20,
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Stars;

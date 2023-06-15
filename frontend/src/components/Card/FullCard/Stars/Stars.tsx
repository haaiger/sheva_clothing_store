import React, { useState } from "react";
import { IRatingProps } from "../../types/types";

const Stars: React.FC<IRatingProps> = ({
  value,
  onChange,
  disabled,
  size,
}: IRatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const stars = [1, 2, 3, 4, 5];

  const handleMouseEnter = (star: number) => {
    if (!disabled) {
      setHoverValue(star);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverValue(null);
    }
  };

  const handleClick = (star: number) => {
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

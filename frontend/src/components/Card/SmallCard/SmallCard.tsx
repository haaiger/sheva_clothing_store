import React from "react";
import { Card, Button } from "antd";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";
import { ISmallCardProps } from "../types/types";

const { Meta } = Card;

const SmallCard: React.FC<ISmallCardProps> = ({
  id,
  productName,
  price,
  photos,
}: ISmallCardProps) => {
  const truncatedProductName =
    productName.length > 18
      ? productName.slice(0, 18).trim() + "..."
      : productName;

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
        icon={<HeartOutlined />}
        size="large"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
        }}
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
      />
      <Meta title={truncatedProductName} description={`${price} ₽`} />
    </Card>
  );
};

export default SmallCard;

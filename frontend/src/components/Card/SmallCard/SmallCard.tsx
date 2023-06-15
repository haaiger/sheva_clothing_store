import React from "react";
import { Card, Button } from "antd";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import ShoppingOutlined from "@ant-design/icons/lib/icons/ShoppingOutlined";

const { Meta } = Card;

const SmallCard: React.FC = () => (
  <Card
    hoverable
    style={{ width: 360 }}
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
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default SmallCard;

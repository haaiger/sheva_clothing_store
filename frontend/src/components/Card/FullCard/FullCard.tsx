import { Card } from "antd";
import styles from "./FullCard.module.css";
import { Button } from "antd";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import { useEffect, useState } from "react";
import DescriptionFullCard from "./DescriptionFullCard/DescriptionFullCard";
import { IProduct } from "../../../types/common";
import { useParams } from "react-router-dom";

const FullCard = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        if (!response.ok) {
          throw new Error("Не удалось получить продукт");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Ошибка получения продукта: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => console.log(product), [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperList}>
        <ul className={styles.list}>
          <li className={`${styles.listElement} ${styles.button}`}>Главная</li>
          <li className={styles.listElement}>/</li>
          <li className={`${styles.listElement} ${styles.button}`}>Женщинам</li>
        </ul>
      </div>

      {product && (
        <div className={styles.content}>
          <Card
            bodyStyle={{ padding: "0" }}
            hoverable
            style={{ width: "50%" }}
            cover={<img alt="example" src={product.photos[0]} />}
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

          <DescriptionFullCard
            rating={rating}
            setRating={setRating}
            activeSize={activeSize}
            handleSizeClick={handleSizeClick}
            product={product}
          />
        </div>
      )}
    </div>
  );
};

export default FullCard;

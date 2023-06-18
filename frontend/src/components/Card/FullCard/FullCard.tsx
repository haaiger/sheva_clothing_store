import { Card } from "antd";
import styles from "./FullCard.module.css";
import { Button } from "antd";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import { useEffect, useState } from "react";
import DescriptionFullCard from "./DescriptionFullCard/DescriptionFullCard";
import { IProduct } from "../../../types/common";
import { useParams } from "react-router-dom";
import SmallCard from "../SmallCard/SmallCard";

const FullCard = () => {
  // Состояния компонента
  const [product, setProduct] = useState<IProduct | null>(null); // Текущий продукт
  const [analogProduct, setAnalogProduct] = useState<IProduct[] | null>(null); // Аналогичные продукты
  const [rating, setRating] = useState<number>(0); // Рейтинг продукта
  const [activeSize, setActiveSize] = useState<string | null>(null); // Активный размер

  const { id } = useParams(); // Получение параметра id из URL

  useEffect(() => {
    // Функция для получения данных о продукте и аналогичных продуктах
    const fetchData = async () => {
      try {
        // Получение данных о продукте
        const productResponse = await fetch(
          `http://localhost:4000/products/${id}`
        );
        if (!productResponse.ok) {
          throw new Error("Не удалось получить продукт");
        }
        const productData = await productResponse.json();
        setProduct(productData);

        // Получение данных об аналогичных продуктах
        const analogProductsResponse = await fetch(
          `http://localhost:4000/products/${productData.gender}/${productData.category}/${productData.id}`
        );
        if (!analogProductsResponse.ok) {
          throw new Error("Не удалось получить аналогичные продукты");
        }
        const analogProductsData = await analogProductsResponse.json();
        setAnalogProduct(analogProductsData);
      } catch (error) {
        console.error(
          "Ошибка получения продукта или аналогичных продуктов: ",
          error
        );
      }
    };

    fetchData(); // Вызов функции получения данных.
  }, [id]);

  useEffect(() => console.log("product:", product), [product]);
  useEffect(
    () => console.log("analogProduct:", analogProduct),
    [analogProduct]
  );

  if (!product) {
    return <div>Loading...</div>; // Вывод сообщения о загрузке, если продукт еще не получен
  }

  const handleSizeClick = (size: string) => {
    setActiveSize(size); // Обработчик клика по размеру
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
            style={{ width: "40%" }}
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

      <div>
        <div className={styles.text}>Аналогичные товары</div>
        <div className={styles.wrapperAnalogProduct}>
          {analogProduct ? (
            analogProduct.map((product: IProduct) => (
              <SmallCard
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                photos={product.photos}
              />
            ))
          ) : (
            <div>Аналогичные товары не найдены...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullCard;

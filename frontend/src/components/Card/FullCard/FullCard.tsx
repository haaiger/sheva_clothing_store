import { Card } from "antd";
import styles from "./FullCard.module.css";
import { Button } from "antd";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import { useEffect, useState } from "react";
import DescriptionFullCard from "./DescriptionFullCard/DescriptionFullCard";
import { IProduct } from "../../../types/common";
import { useParams } from "react-router-dom";
import SmallCard from "../SmallCard/SmallCard";

/**
 * Компонент FullCard отображает полную информацию о товаре, включая описание,
 * рейтинг, размеры и аналогичные товары.
 */
const FullCard = (): JSX.Element => {
  const [product, setProduct] = useState<IProduct | null>(null); // Текущий товар
  const [analogProduct, setAnalogProduct] = useState<IProduct[] | null>(null); // Аналогичные товары
  const [rating, setRating] = useState<number>(0); // Рейтинг товара
  const [activeSize, setActiveSize] = useState<string | null>(null); // Активный размер

  const { id } = useParams(); // Получение параметра id из URL

  useEffect(() => {
    // Функция для получения данных о товаре и аналогичных товарах
    const fetchData = async () => {
      try {
        // Получение данных о товаре
        const productResponse = await fetch(
          `http://localhost:4000/products/${id}`
        );
        if (!productResponse.ok) {
          throw new Error("Не удалось получить товар");
        }
        const productData: IProduct = await productResponse.json();
        setProduct(productData);

        // Получение данных об аналогичных товарах
        const analogProductsResponse = await fetch(
          `http://localhost:4000/products/${productData.gender}/${productData.category}/${productData.id}`
        );
        if (!analogProductsResponse.ok) {
          throw new Error("Не удалось получить аналогичные товары");
        }
        const analogProductsData: IProduct[] =
          await analogProductsResponse.json();
        setAnalogProduct(analogProductsData);
      } catch (error) {
        console.error(
          "Ошибка получения товара или аналогичных товаров: ",
          error
        );
      }
    };

    fetchData(); // Вызов функции получения данных.
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Вывод сообщения о загрузке, если товар еще не получен
  }

  const handleSizeClick = (size: string): void => {
    setActiveSize(size); // Обработчик клика по размеру
  };

  // Определение пола у товара (Женский/Мужской)
  const determinationGender: "Мужчинами" | "Женщинам" =
    product.gender === "Male" ? "Мужчинами" : "Женщинам";

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperList}>
        <ul className={styles.list}>
          <li className={`${styles.listElement} ${styles.button}`}>Главная</li>
          <li className={styles.listElement}>/</li>
          <li className={`${styles.listElement} ${styles.button}`}>
            {determinationGender}
          </li>
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

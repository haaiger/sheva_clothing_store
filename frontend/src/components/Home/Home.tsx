import styles from "./Home.module.css";
import Carousel from "./Carousel/Carousel";
import RandomClothes from "./RandomClothes/RandomClothes";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/common";

/**
 * Компонент Home представляет домашнюю страницу приложения.
 */
const Home = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[] | null>(null); // Все товары, что есть в базе.

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error("Не удалось получить товары");
        }
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка получения товаров: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Carousel products={products} />

      <RandomClothes products={products} />
    </div>
  );
};

export default Home;

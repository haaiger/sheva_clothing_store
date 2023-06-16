import styles from "./Home.module.css";
import Carousel from "./Carousel/Carousel";
import RandomClothes from "./RandomClothes/RandomClothes";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/common";

const Home = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error("Не удалось получить продукты");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка получения продукта: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <Carousel products={products} />

      <RandomClothes products={products} />
    </div>
  );
};

export default Home;

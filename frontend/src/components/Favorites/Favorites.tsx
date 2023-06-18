import { useEffect, useState } from "react";
import SmallCard from "../Card/SmallCard/SmallCard";
import styles from "./Favorites.module.css";
import { IProduct } from "../../types/common";

const Favorites = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        // Получение избранных товаров из localStorage
        const existingFavorites = localStorage.getItem("favorites");
        const favoriteIds = existingFavorites
          ? JSON.parse(existingFavorites)
          : [];

        if (favoriteIds.length === 0) {
          setProducts(null); // Нет избранных товаров, установить значение null
          return;
        }

        const response = await fetch(
          `http://localhost:4000/favorites/${favoriteIds.join("-")}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при получении избранных продуктов: ", error);
      }
    };

    fetchFavorites();
  }, [products]);

  useEffect(() => console.log(products), [products]);

  return (
    <div className={styles.wrapper}>
      <h1>Избранное</h1>

      {products ? (
        <div className={styles.wrapperCards}>
          {products.map((product: IProduct) => (
            <div className={styles.wrapperCard} key={product.id}>
              <SmallCard
                id={product.id}
                productName={product.productName}
                price={product.price}
                photos={product.photos}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.wrapperText}>
          <p>Список избранного пуст</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;

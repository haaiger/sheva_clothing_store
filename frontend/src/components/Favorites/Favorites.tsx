import { useEffect, useState } from "react";
import SmallCard from "../Card/SmallCard/SmallCard";
import styles from "./Favorites.module.css";
import { IProduct } from "../../types/common";

/**
 * Компонент Favorites отображает список избранных товаров.
 */
const Favorites = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[] | null>(null); // Избранные товары

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
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при получении избранных товаров: ", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperList}>
        <ul className={styles.list}>
          <li className={`${styles.listElement} ${styles.button}`}>
            <a href="/" className={styles.link}>
              Главная
            </a>
          </li>
          <li className={styles.listElement}>/</li>
          <li className={`${styles.listElement} ${styles.button}`}>
            <a href="/favorites" className={styles.link}>
              Избранное
            </a>
          </li>
        </ul>
      </div>

      <h1 className={styles.head}>Избранное</h1>

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
          <p>Список избранного пуст.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;

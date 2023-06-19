import { Input } from "antd";
import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/common";
import SmallCard from "../Card/SmallCard/SmallCard";

const { Search: CustomSearch } = Input;

/**
 * Компонент Search представляет страницу поиска товаров.
 */
const Search = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[] | null>(null); // Состояние для хранения всех товаров
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(
    null
  ); // Состояние для хранения отфильтрованных товаров
  const [searched, setSearched] = useState<boolean>(false); // Состояние для отображения информации о выполненном поиске

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await fetch(`http://localhost:4000/products`);

        if (!productResponse.ok) {
          throw new Error("Не удалось получить товары");
        }

        const productData: IProduct[] = await productResponse.json();

        setProducts(productData);
      } catch (error) {
        console.error("Ошибка получения данных для товаров: ", error);
      }
    };

    fetchProducts();
  }, []);

  /**
   *  Функция для выполнения поиска товаров на основе введенного поискового запроса
   * @param {string} searchWord - Введенное слово для поиска
   */
  const searchProducts = (searchWord: string) => {
    const lowerCaseSearchWord = searchWord.toLocaleLowerCase();

    // Фильтрация товаров на основе поискового запроса
    const newProducts =
      products?.filter((product: IProduct) => {
        const lowerCaseProductName = product.productName.toLocaleLowerCase();
        return lowerCaseProductName.includes(lowerCaseSearchWord);
      }) || null;
    setFilteredProducts(newProducts);
    setSearched(true);
  };

  /**
   *  Обработчик сброса фильтра и очистки результатов поиска
   */
  const handleClearFilter = () => {
    setFilteredProducts(null);
    setSearched(false);
  };

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
            <a href="/search" className={styles.link}>
              Поиск
            </a>
          </li>
        </ul>
      </div>

      <h1 className={styles.head}>Поиск</h1>

      <CustomSearch
        onSearch={(value: string) => {
          if (value.trim() === "") {
            handleClearFilter();
          } else {
            searchProducts(value);
          }
        }}
        placeholder="Поиск"
        style={{ width: "30%" }}
        allowClear
        enterButton
      />

      <div className={styles.content}>
        {searched && filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(
            ({ id, productName, price, photos }: IProduct) => (
              <SmallCard
                key={id}
                id={id}
                productName={productName}
                price={price}
                photos={photos}
              />
            )
          )
        ) : searched ? (
          <p>Ничего не найдено.</p>
        ) : (
          <p>Введите что-то в поиск...</p>
        )}
      </div>
    </div>
  );
};

export default Search;

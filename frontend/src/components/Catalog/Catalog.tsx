import { useEffect, useState } from "react";
import styles from "./Catalog.module.css";
import { IProduct } from "../../types/common";
import SmallCard from "../Card/SmallCard/SmallCard";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import ModalFilter from "./ModalFilter/ModalFilter";
import Sort from "./Sort/Sort";

/**
 * Страница каталога с товарами.
 */
const Catalog = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[] | null>(null); // Все товары
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(
    products
  ); // Отфильтрованные товары
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false); // Отображение модального окна
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<string[]>(
    []
  ); // Выбранные фильтры по гендеру
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string[]>([]); // Выбранные фильтры по бренду
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string[]>([]); // Выбранные фильтры по размеру
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    string[]
  >([]); // Выбранные фильтры по категории

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await fetch(`http://localhost:4000/products`);

        if (!productResponse.ok) {
          throw new Error("Не удалось получить товары");
        }

        const productData: IProduct[] = await productResponse.json();

        setProducts(productData);
        setFilteredProducts(productData);
      } catch (error) {
        console.error("Ошибка получения данных для товаров: ", error);
      }
    };

    fetchProducts();
  }, []);

  /**
   * Обработчик события изменения выбранных фильтров по гендеру.
   * @param {CheckboxValueType[]} selectedValues - Массив выбранных значений фильтра.
   */
  const handleGenderFilterSelection = (selectedValues: CheckboxValueType[]) => {
    setSelectedGenderFilter(
      selectedValues.map((value: CheckboxValueType) => String(value))
    );
  };

  /**
   * Обработчик события изменения выбранных фильтров по бренду.
   * @param {CheckboxValueType[]} selectedValues - Массив выбранных значений фильтра.
   */
  const handleBrandFilterSelection = (selectedValues: CheckboxValueType[]) => {
    setSelectedBrandFilter(
      selectedValues.map((value: CheckboxValueType) => String(value))
    );
  };

  /**
   * Обработчик события изменения выбранных фильтров по размеру.
   * @param {CheckboxValueType[]} selectedValues - Массив выбранных значений фильтра.
   */
  const handleSizeFilterSelection = (selectedValues: CheckboxValueType[]) => {
    setSelectedSizeFilter(
      selectedValues.map((value: CheckboxValueType) => String(value))
    );
  };

  /**
   * Обработчик события изменения выбранных фильтров по категории.
   * @param {CheckboxValueType[]} selectedValues - Массив выбранных значений фильтра.
   */
  const handleCategoryFilterSelection = (
    selectedValues: CheckboxValueType[]
  ) => {
    setSelectedCategoryFilter(
      selectedValues.map((value: CheckboxValueType) => String(value))
    );
  };

  /**
   * Применение выбранных фильтров к товарам.
   */
  const applyFilters = () => {
    const filteredProducts = products?.filter((product: IProduct) => {
      const size: string[] = product.size.split(",");
      const color: string[] = product.color.split(","); // ! TODO: убрать, если не будет сортировки по цвету

      // Фильтрация по выбранным значениям фильтра гендера
      const isGenderMatch =
        selectedGenderFilter.length === 0 ||
        selectedGenderFilter.includes(product.gender);

      // Фильтрация по выбранным значениям фильтра бренда
      const isBrandMatch =
        selectedBrandFilter.length === 0 ||
        selectedBrandFilter.includes(product.brand);

      // Фильтрация по выбранным значениям фильтра категории
      const isCategoryMatch =
        selectedCategoryFilter.length === 0 ||
        selectedCategoryFilter.includes(product.category);

      // Фильтрация по выбранным значениям фильтра размера
      const isSizeMatch =
        selectedSizeFilter.length === 0 ||
        selectedSizeFilter.some((selectedSize: string) =>
          size.includes(selectedSize)
        );

      return isGenderMatch && isBrandMatch && isCategoryMatch && isSizeMatch;
    }) as IProduct[] | null;

    setFilteredProducts(filteredProducts);
  };

  /**
   *  Функция отмены всеё фильтров
   */
  const clearAllFilters = () => {
    setFilteredProducts(products);
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
            <a href="/catalog" className={styles.link}>
              Каталог
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.wrapperButtons}>
        <ModalFilter
          applyFilters={applyFilters}
          clearAllFilters={clearAllFilters}
          isFilterModalOpen={isFilterModalOpen}
          setIsFilterModalOpen={setIsFilterModalOpen}
          handleGenderFilterSelection={handleGenderFilterSelection}
          handleBrandFilterSelection={handleBrandFilterSelection}
          handleSizeFilterSelection={handleSizeFilterSelection}
          handleCategoryFilterSelection={handleCategoryFilterSelection}
        />

        <Sort products={filteredProducts} setProducts={setFilteredProducts} />
      </div>

      <div className={styles.wrapperCards}>
        {filteredProducts?.map((product: IProduct) => (
          <SmallCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

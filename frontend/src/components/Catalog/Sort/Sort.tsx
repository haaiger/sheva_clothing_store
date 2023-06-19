import Dropdown from "antd/es/dropdown/dropdown";
import { IProduct } from "../../../types/common";
import styles from "./Sort.module.css";
import SlidersFilled from "@ant-design/icons/lib/icons/SlidersFilled";
import { MenuProps } from "antd/es/menu/menu";
import { IMenuItem, ISortProps } from "../types";

/**
 * Компонент Sort представляет выпадающее меню для сортировки товаров.
 * @param {IProduct[]} products - Данные товаров для сортировки.
 * @param {(sortedProducts) => void} setProducts - Колбэк для изменения массива продуктов.
 */
const Sort = ({ products, setProducts }: ISortProps): JSX.Element => {
  const items: IMenuItem[] = [
    {
      label: "По умолчанию",
      key: "default",
    },
    { label: "По возрастанию цены", key: "price-asc" },
    { label: "По убыванию цены", key: "price-desc" },
    { label: "Сначала новые", key: "newest" },
    {
      label: "Сначала старые",
      key: "oldest",
    },
    { label: "По названию", key: "name" },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    sortProducts(key);
  };

  const sortProducts = (sortKey: string) => {
    const sortedProducts: IProduct[] | [] = products ? [...products] : [];

    switch (sortKey) {
      case "default":
        sortedProducts.sort((a: IProduct, b: IProduct) => a.id - b.id);
        break;
      case "price-asc":
        sortedProducts.sort(
          (a: IProduct, b: IProduct) =>
            parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "price-desc":
        sortedProducts.sort(
          (a: IProduct, b: IProduct) =>
            parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "newest":
        sortedProducts.sort((a: IProduct, b: IProduct) => b.id - a.id);
        break;
      case "oldest":
        sortedProducts.sort((a: IProduct, b: IProduct) => a.id - b.id);
        break;
      case "name":
        sortedProducts.sort((a: IProduct, b: IProduct) =>
          a.productName.localeCompare(b.productName)
        );
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  return (
    <Dropdown menu={{ items, onClick }} trigger={["click"]}>
      <div className={`${styles.wrapperSort} ${styles.button}`}>
        <span>Сортировка</span>
        <SlidersFilled />
      </div>
    </Dropdown>
  );
};

export default Sort;

import { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./ModalFilter.module.css";
import FilterSection from "./FilterSection/FilterSection";
import { IModalFilterProps } from "../types";

/**
 * Компонент ModalFilter представляет модальное окно с фильтрами.
 * @param {() => void} applyFilters - Функция для применения фильтров.
 * @param {boolean} isFilterModalOpen - Флаг, указывающий, открыто ли модальное окно с фильтрами.
 * @param {(state: boolean) => void} setIsFilterModalOpen - Функция для установки состояния открытия/закрытия модального окна с фильтрами.
 * @param {(selectedFilters: CheckboxValueType[]) => void} handleGenderFilterSelection - Обработчик события изменения выбранных фильтров по полу.
 * @param {(selectedFilters: CheckboxValueType[]) => void} handleBrandFilterSelection - Обработчик события изменения выбранных фильтров по бренду.
 * @param {(selectedFilters: CheckboxValueType[]) => void} handleSizeFilterSelection - Обработчик события изменения выбранных фильтров по размеру.
 * @param {(selectedFilters: CheckboxValueType[]) => void} handleCategoryFilterSelection - Обработчик события изменения выбранных фильтров по категории.
 */
const ModalFilter = ({
  applyFilters,
  clearAllFilters,
  isFilterModalOpen,
  setIsFilterModalOpen,
  handleGenderFilterSelection,
  handleBrandFilterSelection,
  handleSizeFilterSelection,
  handleCategoryFilterSelection,
}: IModalFilterProps): JSX.Element => {
  const [isGenderOpen, setIsGenderOpen] = useState<boolean>(false);
  const [isBrandOpen, setIsBrandOpen] = useState<boolean>(false);
  const [isSizeOpen, setIsSizeOpen] = useState<boolean>(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

  const toggleGender = () => {
    setIsGenderOpen((prevState: boolean) => !prevState);
  };

  const toggleBrand = () => {
    setIsBrandOpen((prevState: boolean) => !prevState);
  };

  const toggleSize = () => {
    setIsSizeOpen((prevState: boolean) => !prevState);
  };

  const toggleCategory = () => {
    setIsCategoryOpen((prevState: boolean) => !prevState);
  };

  const handleCloseModal = () => {
    setIsGenderOpen(false);
    setIsBrandOpen(false);
    setIsSizeOpen(false);
    setIsCategoryOpen(false);
    setIsFilterModalOpen(false);
  };

  return (
    <>
      <div className={styles.button} onClick={() => setIsFilterModalOpen(true)}>
        Фильтры
      </div>

      {isFilterModalOpen && (
        <Modal
          title="Фильтры"
          open={true}
          onCancel={handleCloseModal}
          onOk={applyFilters}
          okText={"Применить фильтры"}
          bodyStyle={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <FilterSection
            title="Пол"
            isOpen={isGenderOpen}
            onToggle={toggleGender}
            onChange={handleGenderFilterSelection}
            options={[
              { value: "Male", label: "Мужской" },
              { value: "Female", label: "Женский" },
            ]}
          />

          <FilterSection
            title="Бренд"
            isOpen={isBrandOpen}
            onToggle={toggleBrand}
            onChange={handleBrandFilterSelection}
            options={[
              { value: "PRADA", label: "PRADA" },
              { value: "ZARA", label: "ZARA" },
              { value: "GUCCI", label: "Gucci" },
            ]}
          />

          <FilterSection
            title="Размер"
            isOpen={isSizeOpen}
            onToggle={toggleSize}
            onChange={handleSizeFilterSelection}
            options={[
              { value: "XS", label: "XS" },
              { value: "S", label: "S" },
              { value: "M", label: "M" },
              { value: "L", label: "L" },
              { value: "XL", label: "XL" },
              { value: "XLL", label: "XLL" },
            ]}
          />

          <FilterSection
            title="Категория"
            isOpen={isCategoryOpen}
            onToggle={toggleCategory}
            onChange={handleCategoryFilterSelection}
            options={[
              { value: "Pants", label: "Штаны" },
              { value: "Shorts", label: "Шорты" },
              { value: "T-Shirt", label: "Футболка" },
              { value: "Dress", label: "Платье" },
            ]}
          />

          <Button danger onClick={clearAllFilters}>
            Отменить все фильтры
          </Button>
        </Modal>
      )}
    </>
  );
};

export default ModalFilter;

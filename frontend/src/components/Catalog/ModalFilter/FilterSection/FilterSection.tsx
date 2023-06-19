import { Checkbox } from "antd";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import styles from "./FilterSection.module.css";
import { IFilterSectionProps } from "../../types";

/**
 * Компонент FilterSection представляет секцию фильтра в модальном окне фильтров.
 * @param {string} title - Заголовок секции фильтра.
 * @param {boolean} isOpen - Флаг, указывающий, открыта ли секция фильтра.
 * @param {() => void} onToggle - Обработчик события переключения открытия/закрытия секции фильтра.
 * @param {CheckboxValueType[]} selectedFilters - Массив выбранных фильтров в секции фильтра.
 * @param {(selectedFilters: CheckboxValueType[]) => void} onChange - Обработчик события изменения выбранных фильтров в секции фильтра.
 * @param {{ value: string; label: string }[]} options - Опции фильтров в секции фильтра.
 */
const FilterSection = ({
  title,
  isOpen,
  onToggle,
  onChange,
  options,
}: IFilterSectionProps): JSX.Element => {
  return (
    <div className={styles.wrapperFilter}>
      <div className={styles.wrapperHeadFilter} onClick={onToggle}>
        {title}
        {isOpen ? <UpOutlined /> : <DownOutlined />}
      </div>

      {isOpen && (
        <div className={styles.wrapperContentFilter}>
          <Checkbox.Group onChange={onChange}>
            {options.map((option) => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
      )}
    </div>
  );
};

export default FilterSection;

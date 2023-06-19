import { CheckboxValueType } from "antd/es/checkbox/Group";
import { IProduct } from "../../types/common";

export interface ISortProps {
    products: IProduct[] | null;
    setProducts: (sortedProducts: IProduct[]) => void;
}

export interface IMenuItem {
    label: string;
    key: string;
}

export interface IModalFilterProps {
    applyFilters: () => void;
    clearAllFilters: () => void;
    isFilterModalOpen: boolean;
    setIsFilterModalOpen: (state: boolean) => void;
    handleGenderFilterSelection: (selectedFilters: CheckboxValueType[]) => void;
    handleBrandFilterSelection: (selectedFilters: CheckboxValueType[]) => void;
    handleSizeFilterSelection: (selectedFilters: CheckboxValueType[]) => void;
    handleCategoryFilterSelection: (selectedFilters: CheckboxValueType[]) => void;
}
import { Dispatch, SetStateAction } from "react";
import { IProduct } from "../../../types/common";

export interface ISmallCardProps {
    id: number,
    productName: string,
    price: string,
    photos: string[],
}

export interface ISizeCard {
    size: string;
    active?: boolean;
    onClick?: (size: string) => void;
}

export interface IStarProps {
    value: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    size?: number;
}

export interface IDescriptionFullCardProps {
    rating: number;
    setRating: Dispatch<SetStateAction<number>>;
    activeSize: string | null;
    handleSizeClick: (size: string) => void;
    product: IProduct;
}

export interface IInfo {
    id: number;
    name: string;
    composition: string;
}

export interface IInfoDropdownProps {
    title: string;
    info: IInfo[];
}

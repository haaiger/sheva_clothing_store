import { Dispatch, SetStateAction } from "react";

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

export interface IRatingProps {
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

export interface IProduct {
    id: number;
    productName: string;
    description: string;
    price: string;
    size: string;
    gender: string;
    color: string;
    category: string;
    brand: string;
    count: number;
    photos: string[];
}

export interface IRandomClothesProps {
    products: IProduct[] | null;
}

export interface ICarouselProps {
    products: IProduct[] | null;
}
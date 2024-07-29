export interface ProductModel {
    id: number;
    name: string;
    image: string;
    BrandName: string;
    description: string;
    price: number;
    discount: number;
    categoryName: string;
    genderName: string;
}

export interface CreateProductModel {
    name: string;
    image: string;
    BrandId: number;
    description: string;
    price: number;
    discount: number;
    categoryId: number;
    genderId: number;
}

export interface EditProductModel {
    id: number;
    name: string;
    image: string;
    BrandId: number;
    description: string;
    price: number;
    discount: number;
    categoryId: number;
    genderId: number;
}
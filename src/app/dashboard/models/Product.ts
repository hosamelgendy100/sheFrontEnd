import { ProductColor } from './ProductColor';
import { Photo } from './Photo';
import { ProductSize } from './ProductSize';

export interface Product {
    id?: number;
    name: string;
    description: string;
    price?: number;
    count?: number;
    creationDate: string;
    lastEdit: string;
    onSale: boolean;
    productPhotos?: Photo[];
    productSizes?: ProductSize[];
    productColors?: ProductColor [];
    categoryId?: number;
    categoryName: string;
    subCategoryId?: number;
    subCategoryName: string;
    userId?: number;
    userName: string;
    sellerId?: number;
    sellerName: string;
}

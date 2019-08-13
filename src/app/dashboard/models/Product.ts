import { ProductPhoto } from './ProductPhoto';
import { Photo } from './Photo';
import { ProductSize } from './ProductSize';

export interface Product {
    id?: number;
    name: string;
    description: string;
    price?: number;
    color: string;
    count?: number;
    creationDate: string;
    lastEdit: string;
    onSale: boolean;
    productSizes?: ProductSize[];
    productPhotos?: ProductPhoto [];
    categoryId?: number;
    categoryName: string;
    subCategoryId?: number;
    subCategoryName: string;
    userId?: number;
    userName: string;
    sellerId?: number;
    sellerName: string;
}

import { Seller } from './Seller';
import { User } from './User';
import { Subcategory } from './Subcategory';
import { ProductSize } from './ProductSize';
import { ProductColor } from './ProductColor';
import { Category } from './Category';

export interface DdListContainer {
    ProductSizesDd: ProductSize [];
    ProductColorstDd: ProductColor [];
    ctgsListDd: Category [];
    subCtgsListDd: Subcategory [];
    sellersListDd: Seller [];
}



import { Seller } from './Seller';
import { User } from './User';
import { Subcategory } from './Subcategory';
import { ProductSize } from './ProductSize';
import { Category } from './Category';

export interface DdListContainer {
    ProductSizesDd: ProductSize [];
    ctgsListDd: Category [];
    subCtgsListDd: Subcategory [];
    sellersListDd: Seller [];
}



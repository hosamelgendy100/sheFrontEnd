import { SizesComponent } from './dashboard/pages/sizes/sizes.component';
import { ColorsComponent } from './dashboard/pages/colors/colors.component';
import { SellersComponent } from './dashboard/pages/sellers/sellers.component';
import { ProductDetailsResolver } from './dashboard/_resolvers/ProductDetails.resolver';
import { AddProductPhotosComponent } from './dashboard/pages/mangaeProducts/addProductPhotos/addProductPhotos.component';
import { DshProductDetailsComponent } from './dashboard/pages/mangaeProducts/dshProductDetails/dshProductDetails.component';
import { AddProductComponent } from './dashboard/pages/mangaeProducts/addProduct/addProduct.component';
import { CategoriesComponent } from './dashboard/pages/categories/categories.component';
import { UsersListComponent } from './dashboard/pages/usersList/usersList.component';
import { DashboardProductsComponent } from './dashboard/pages/mangaeProducts/dshProducts/dashboardProducts.component';
import { ForgotPasswordComponent } from './ClientDisplay/AuthPages/forgotPassword/forgotPassword.component';
import { HomeLayoutComponent } from './ClientDisplay/DisplayLayout/HomeLayout.component';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './dashboard/sharedPages/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard/pages/dashboard-home/dashboard-home.component';
import { ContactUsComponent } from './ClientDisplay/pages/contact-us/contact-us.component';
import { CheckOutComponent } from './ClientDisplay/pages/check-out/check-out.component';
import { ViewCartComponent } from './ClientDisplay/pages/view-cart/view-cart.component';
import { CreateAccountComponent } from './ClientDisplay/AuthPages/create-account/create-account.component';
import { SignInComponent } from './ClientDisplay/AuthPages/sign-in/sign-in.component';
import { HotDealsComponent } from './ClientDisplay/pages/HomePage/hot-deals/hot-deals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './ClientDisplay/Products/product-details/product-details.component';
import { ViewProductsComponent } from './ClientDisplay/Products/view-products/view-products.component';
import { NotificationsComponent } from './dashboard/pages/notifications/notifications.component';
import { SubcategoriesComponent } from './dashboard/pages/subcategories/subcategories.component';


export const PUBLIC_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HotDealsComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'viewCart', component: ViewCartComponent},
  {path: 'checkOut', component: CheckOutComponent},
  {path: 'viewProducts', component: ViewProductsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'viewProduct/:id', component: ProductDetailsComponent, resolve: {product: ProductDetailsResolver}},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
];

export const SECURE_ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardHomeComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'products', component: DashboardProductsComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'subCategories', component: SubcategoriesComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addProduct/:id', component: AddProductComponent, resolve: {product: ProductDetailsResolver}},
  {path: 'dshProductDetails/:id', component: DshProductDetailsComponent, resolve:{product: ProductDetailsResolver}},
  {path: 'addProductPhotos', component: AddProductPhotosComponent},
  {path: 'sellers', component: SellersComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'sizes', component: SizesComponent},
];

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeLayoutComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: DashboardLayoutComponent,  data: { title: 'Secure Views' }, children: SECURE_ROUTES,
   runGuardsAndResolvers: 'always' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

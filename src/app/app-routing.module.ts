import { CategoryEditResolver } from './_resolvers/CategoryEdit.resolver';
import { CategoriesComponent } from './dashboard/pages/categories/categories.component';
import { UsersListComponent } from './dashboard/pages/usersList/usersList.component';
import { DashboardProductsComponent } from './dashboard/pages/dashboardProducts/dashboardProducts.component';
import { ForgotPasswordComponent } from './auth/forgotPassword/forgotPassword.component';
import { HomeLayoutComponent } from './HomePage/HomeLayout/HomeLayout.component';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard/pages/dashboard-home/dashboard-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HotDealsComponent } from './HomePage/hot-deals/hot-deals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
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
  {path: 'viewProduct', component: ProductDetailsComponent},
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

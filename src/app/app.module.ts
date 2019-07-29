import { UsersListComponent } from './dashboard/pages/usersList/usersList.component';
import { CategoriesComponent } from './dashboard/pages/categories/categories.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ForgotPasswordComponent } from './auth/forgotPassword/forgotPassword.component';
import { HomeLayoutComponent } from './HomePage/HomeLayout/HomeLayout.component';
import { AlertifyService } from './services/alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './homeNavbar/homeNavbar.component';
import { CollapseModule, BsDropdownModule, CarouselModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotDealsComponent } from './HomePage/hot-deals/hot-deals.component';
import { LatestProductsComponent } from './homepage/latest-products/latest-products.component';
import { TopSellingComponent } from './homepage/top-selling/top-selling.component';
import { FooterBannerComponent } from './homepage/footer-banner/footer-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { DashboardHomeComponent } from './dashboard/pages/dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ProductReviewComponent } from './products/product-review/product-review.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './dashboard/pages/notifications/notifications.component';
import { SubcategoriesComponent } from './dashboard/pages/subcategories/subcategories.component';
import { DashboardProductsComponent } from './dashboard/pages/dashboardProducts/dashboardProducts.component';



@NgModule({
  declarations: [
    AppComponent, HomeNavbarComponent, HotDealsComponent, LatestProductsComponent,
    TopSellingComponent, FooterBannerComponent, FooterComponent, ViewCartComponent,
    CheckOutComponent, ViewProductsComponent, ProductDetailsComponent, ContactUsComponent,
    SignInComponent, CreateAccountComponent, DashboardHomeComponent,
    DashboardLayoutComponent, SidebarComponent, HomeLayoutComponent,
    ProductReviewComponent, ForgotPasswordComponent, NavbarComponent, NotificationsComponent,
    CategoriesComponent, SubcategoriesComponent, DashboardProductsComponent, UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    FormsModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot(), CarouselModule.forRoot(), NgbModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpErrorHandler } from './sharedServices/http-error-handler.service';
import { ErrorInterceptor } from './sharedServices/error.interceptor';
import { CrudService } from './dashboard/services/crud.service';
import { UsersListComponent } from './dashboard/pages/usersList/usersList.component';
import { CategoriesComponent } from './dashboard/pages/categories/categories.component';
import { NavbarComponent } from './dashboard/sharedPages/navbar/navbar.component';
import { ForgotPasswordComponent } from './ClientDisplay/AuthPages/forgotPassword/forgotPassword.component';
import { HomeLayoutComponent } from './ClientDisplay/DisplayLayout/HomeLayout.component';
import { AlertifyService } from './sharedServices/alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './ClientDisplay/pages/homeNavbar/homeNavbar.component';
import { CollapseModule, BsDropdownModule, CarouselModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotDealsComponent } from './ClientDisplay/pages/HomePage/hot-deals/hot-deals.component';
import { LatestProductsComponent } from './ClientDisplay/pages/HomePage/latest-products/latest-products.component';
import { TopSellingComponent } from './ClientDisplay/pages/HomePage/top-selling/top-selling.component';
import { FooterBannerComponent } from './ClientDisplay/pages/HomePage/footer-banner/footer-banner.component';
import { FooterComponent } from './ClientDisplay/pages/footer/footer.component';
import { ViewCartComponent } from './ClientDisplay/pages/view-cart/view-cart.component';
import { CheckOutComponent } from './ClientDisplay/pages/check-out/check-out.component';
import { ViewProductsComponent } from './ClientDisplay/Products/view-products/view-products.component';
import { ProductDetailsComponent } from './ClientDisplay/Products/product-details/product-details.component';
import { ContactUsComponent } from './ClientDisplay/pages/contact-us/contact-us.component';
import { SignInComponent } from './ClientDisplay/AuthPages/sign-in/sign-in.component';
import { CreateAccountComponent } from './ClientDisplay/AuthPages/create-account/create-account.component';
import { DashboardHomeComponent } from './dashboard/pages/dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from './dashboard/sharedPages/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './dashboard/sharedPages/sidebar/sidebar.component';
import { ProductReviewComponent } from './ClientDisplay/Products/product-review/product-review.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './dashboard/pages/notifications/notifications.component';
import { SubcategoriesComponent } from './dashboard/pages/subcategories/subcategories.component';
import { DashboardProductsComponent } from './dashboard/pages/dashboardProducts/dashboardProducts.component';
import { MessageService } from './sharedServices/message.service';



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
    BrowserAnimationsModule, ToastrModule.forRoot(), CarouselModule.forRoot(), NgbModule,
    ModalModule.forRoot()
  ],
  providers: [AlertifyService, CrudService, ErrorInterceptor,
              HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

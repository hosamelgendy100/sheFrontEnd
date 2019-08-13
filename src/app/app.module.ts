import { AddProductPhotosComponent } from './dashboard/pages/mangaeProducts/addProductPhotos/addProductPhotos.component';
import { DshProductDetailsComponent } from './dashboard/pages/mangaeProducts/dshProductDetails/dshProductDetails.component';
import { AddProductComponent } from './dashboard/pages/mangaeProducts/addProduct/addProduct.component';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './dashboard/pages/notifications/notifications.component';
import { SubcategoriesComponent } from './dashboard/pages/subcategories/subcategories.component';
import { DashboardProductsComponent } from './dashboard/pages/mangaeProducts/dshProducts/dashboardProducts.component';
import { MessageService } from './sharedServices/message.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductDetailsResolver } from './dashboard/_resolvers/ProductDetails.resolver';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { SellersComponent } from './dashboard/pages/sellers/sellers.component';
import { ColorsComponent } from './dashboard/pages/colors/colors.component';
import { SizesComponent } from './dashboard/pages/sizes/sizes.component';
import {MatTreeModule} from '@angular/material/tree';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
    AppComponent, HomeNavbarComponent, HotDealsComponent, LatestProductsComponent,
    TopSellingComponent, FooterBannerComponent, FooterComponent, ViewCartComponent,
    CheckOutComponent, ViewProductsComponent, ProductDetailsComponent, ContactUsComponent,
    SignInComponent, CreateAccountComponent, DashboardHomeComponent,
    DashboardLayoutComponent, SidebarComponent, HomeLayoutComponent,
    ForgotPasswordComponent, NavbarComponent, NotificationsComponent,
    CategoriesComponent, SubcategoriesComponent, DashboardProductsComponent, UsersListComponent,
    AddProductComponent, DshProductDetailsComponent, AddProductPhotosComponent, SellersComponent, ColorsComponent, SizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    FormsModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot({timeOut: 10000, positionClass: 'toast-bottom-left',
     preventDuplicates: true}), 
    CarouselModule.forRoot(), NgbModule, ModalModule.forRoot(), MatFormFieldModule, MatRadioModule,
    MatCheckboxModule, MatSelectModule, MatIconModule, MatInputModule, MatButtonModule, MatCardModule,
    FileUploadModule, AccordionModule.forRoot(),MatExpansionModule, Ng5SliderModule
  ],
  providers: [AlertifyService, CrudService, ErrorInterceptor,
              HttpErrorHandler, MessageService,ProductDetailsResolver,
              {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'false'}}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }

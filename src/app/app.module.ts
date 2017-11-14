import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';

import { CoreModule } from './core/core.module';
// import { AuthInterceptor } from './core/auth/auth.interceptor';
// import { CurrentUserService } from './core/auth/current-user.service';
// import { AuthService } from './core/auth/auth.service';
// import { CartService } from './core/cart/cart.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';

@NgModule({
  imports: [
    BrowserModule,
    Ng2Webstorage.forRoot({
      prefix: 'cxcloud-demo',
      separator: '.',
      caseSensitive: true
    }),
    CoreModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HomeModule,
    CategoriesModule,
    LayoutModule,
    CartModule,
    CheckoutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandNavbarComponent } from './header/brand-navbar/brand-navbar.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandNavbarComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteTitleComponent } from './site-title/site-title.component';
import { OrderButtonComponent } from './order-button/order-button.component';
import { TextCardComponent } from './text-card/text-card.component';
import { MenuLinkComponent } from './menu-link/menu-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteTitleComponent,
    OrderButtonComponent,
    TextCardComponent,
    MenuLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

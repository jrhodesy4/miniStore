import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './products/new/new.component';
import { ListComponent } from './products/list/list.component';
import { NewCustomerComponent } from './customers/new/new.component';
import { ListCustomerComponent } from './customers/list/list.component';
import { NewOrderComponent } from './orders/new/new.component';
import { ListOrderComponent } from './orders/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    NewComponent,
    ListComponent,
    NewCustomerComponent,
    ListCustomerComponent,
    NewOrderComponent,
    ListOrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

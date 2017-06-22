import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: Array<any>;
  orders: Array<any>;
  products: Array<any>;

  constructor(private _productsService: ProductService) { }

  ngOnInit() {
    this.getCustomers();
    this.getProducts();
    this.getOrders();
  }
  getCustomers(){
    this._productsService.getCustomers()
    .then((customers) => {
      this.customers = customers;
    })
    .catch((response) => {
      console.log(response)
    })
  }
  getProducts(){
    this._productsService.getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((response) => {
        console.log(response)
      })
  }
  getOrders() {
      this._productsService.getOrders()
      .then((orders)=> {
        this.orders = orders
      })
      .catch((response) => {
        console.log(response)
      })
  }


}

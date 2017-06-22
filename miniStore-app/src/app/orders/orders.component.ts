import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
      this.customers = customers
    })
    .catch((response) => {
      console.log(response)
    })
  }

  getProducts(){
    this._productsService.getProducts()
    .then((products) => {
      this.products = products
    })
    .catch((response) => {
      alert(response)
    })
  }
  getOrders() {
    this._productsService.getOrders()
    .then((orders) => {
      this.orders = orders;
    })
    .catch(() => {
      alert('There was a problem retrieving the orders')
    })
  }
  createOrder(order) {
    this._productsService.createOrder(order)
    .then(() => {
      this.getOrders();
    })
    .catch ((err) => console.log(err))
  }








}

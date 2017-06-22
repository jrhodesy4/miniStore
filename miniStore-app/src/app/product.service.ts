import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductService {


  constructor(private _http: Http) { }

  createProduct(product) {
    return this._http.post('/api/products', product).map((response) => response.json()).toPromise();
  }
  getProducts() {
    return this._http.get('/api/products').map((products) => products.json()).toPromise();
  }



  getCustomers(){
    return this._http.get('/api/customers').map((response) => response.json()).toPromise();
  }
  addCustomer(customer) {
    return this._http.post('/api/customers', customer).map((response) => response.json()).toPromise();
  }
  deleteCustomer(id){
    return this._http.delete('/api/customers/'+id).map((response) => response.json()).toPromise();
  }

  createOrder(order) {
    return this._http.post('/api/orders', order).map((response) => response.json()).toPromise();
  }
  getOrders() {
    return this._http.get('/api/orders').map((orders) => orders.json()).toPromise();
  }

}

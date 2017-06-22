import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Array<any>;

  constructor(private _productsService: ProductService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this._productsService.getCustomers()
    .then((customers) => this.customers= customers)
    .catch((response) => console.log(response))
  }
  addCustomer(customer) {
    this._productsService.addCustomer(customer)
    .then((res) => {
      this.getCustomers();
    })
    .catch((res) => console.log(res))
  }

  deleteCustomer(id){
    this._productsService.deleteCustomer(id)
    .then((res) => {
      this.getCustomers();
    })
    .catch(() => {
      console.log('Something went Wrong')
    })
  }


}

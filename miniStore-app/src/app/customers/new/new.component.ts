import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCustomerComponent implements OnInit {
  @Output() newCustomerEvent = new EventEmitter();

  customer= {name: ''}

  constructor(private _productsService: ProductService) { }

  ngOnInit() {
  }
  createCustomer() {
    this.newCustomerEvent.emit(this.customer);
    this.customer = {name: ''}
  }


}

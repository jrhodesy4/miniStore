import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewOrderComponent implements OnInit {
  @Input() products;
  @Input() customers;
  @Output() newOrderEvent = new EventEmitter();

  order = {customer: '', quantity: '', product: ''}

  constructor() { }

  ngOnInit() {
  }

  createOrder() {
    this.newOrderEvent.emit(this.order);
  }

}

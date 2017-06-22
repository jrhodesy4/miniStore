import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCustomerComponent implements OnInit {
  @Input() customers;
  @Output() deleteCustomerEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  deleteCustomer(id) {
    this.deleteCustomerEvent.emit(id);
  }

}

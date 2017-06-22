import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter();

  product = {name: '', description: '', quantity: ''}
  constructor(private _productsService: ProductService) { }

  ngOnInit() {
  }

  createProduct() {
    this.newProductEvent.emit(this.product);
    this.product = {name: '', description: '', quantity: ''} 

  }

}

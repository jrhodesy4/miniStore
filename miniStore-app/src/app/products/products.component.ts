import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any>;
  errors: any;

  constructor(private _productsService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  createProduct(product) {
    this._productsService.createProduct(product)
    .then(() => {
      this.getProducts();
    })
    .catch ((err) => this.errors = err._body.split(","))
  }
  getProducts(){
    this._productsService.getProducts()
    .then((products) => this.products = products)
    .catch((response) => console.log(response))
  }

}

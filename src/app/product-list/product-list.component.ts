import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productiveService.getProducts().subscribe(response=>
    this.products = response); 
  }

}

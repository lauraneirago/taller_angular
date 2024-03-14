import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/products.model';
import { ProductState } from '../ngrx/product.state';
import { Store } from '@ngrx/store';
import { state } from '@angular/animations';

@Component({
  selector: 'app-car-products',
  templateUrl: './car-products.component.html',
  styleUrls: ['./car-products.component.scss']
})
export class CarProductsComponent implements OnInit {

  product: Observable<Product[]>

  constructor(public store:Store<ProductState>) { 
    this.product = this.store.select(state=> state.product)
  }

  ngOnInit(): void {
  }

}

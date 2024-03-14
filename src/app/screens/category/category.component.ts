import { Component, OnInit } from '@angular/core';
import {ServiceMainService} from '../../shared/services/service-main.service'
import { Product } from 'src/app/shared/models/products.model';
import { Store } from '@ngrx/store';
import { ProductState } from '../ngrx/product.state';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  public bodyArray:Array < Product>=[
    
  ] 
  constructor(public service: ServiceMainService, public store:Store<ProductState>) { }

  ngOnInit(): void {
   this.service.gerProducts().subscribe(res=>this.bodyArray=res)
  }

  addItem(item){
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload:item
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from '../category/category.component';
import { CarProductsComponent } from '../car-products/car-products.component';
import { StoreModule } from '@ngrx/store';
import { addProducts } from '../ngrx/car-products.reducer'

@NgModule({
  declarations: [DashboardComponent,
    HomeComponent,
    CategoryComponent,
    CarProductsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forRoot({product:addProducts})
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from '../category/category.component';
import { CarProductsComponent } from '../car-products/car-products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
children:[
  {path:'', redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio', component:HomeComponent},
  {path:'category', component:CategoryComponent}
] },
{path: 'card-product', component:CarProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

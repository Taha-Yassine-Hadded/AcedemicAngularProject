import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormProductComponent } from 'src/app/components/form-product/form-product.component';

const routes: Routes = [
  { path: 'add', component: FormProductComponent },
  { path: ':id', component: ProductComponent }, //PathParam
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

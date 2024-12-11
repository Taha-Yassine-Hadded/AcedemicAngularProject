import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPricePipe } from './pipes/search-price.pipe';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { CardComponent } from './components/card/card.component';
import { FromValidationComponent } from "./components/from-validation/from-validation.component";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category/add', component: FormCategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component : LoginComponent },
  {
    path: 'products', loadChildren:
      () => import('./features/product/product.module')
      .then(m => m.ProductModule)
  },
  {
    path: 'contact', loadChildren:
      () => import('./features/contact/contact.module')
    .then(m=>m.ContactModule)
  },
  {
    path: 'apropos', loadChildren:
      () => import('./features/apropos/apropos.module')
    .then(m=>m.AproposModule)
  },
  {
    path: 'profile', loadChildren:
      () => import('./features/profile/profile.module')
    .then(m=>m.ProfileModule)
  },
  { path :'**' ,component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListcategoriesComponent,
    FilterPipe,
    NotFoundComponent,
    FormCategoryComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CardComponent,
    FromValidationComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

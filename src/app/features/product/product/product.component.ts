import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  // ac: ActivatedRoute = new ActivatedRoute() // instantiation avec le constructeur
 /* c1(c2, c3);
  new c2(c4);
new c3();
new c1();*/
  
  id!: number;
  
  //Injection des dépendences : Design pattern
  constructor(private activated: ActivatedRoute,private p:ProductService) {
    //Path Param
    //Méthode 1
    this.activated.params.subscribe(param => this.id = param['id'])
    
    //Méthode 2
    this.activated.paramMap.subscribe(param => console.log(param))
    
    //Méthode 3
    console.log(this.activated.snapshot.params)

    //Query Param
    this.activated.queryParams.subscribe((param) => console.log(param['name']));

    this.listProducts = this.p.getProducts().filter((p) =>
      p.categoryId == this.id
    )

  }
  

  likeParent(id: number) {
    this.listProducts.find(p => p.id == id)!.nb_likes++;
  }

  price: number = 0;
  listProducts: Product[] = [];
  incrementLikes(element:Product) {
    element.nb_likes++;
  }
}

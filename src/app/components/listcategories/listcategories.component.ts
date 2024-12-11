import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Category } from '../../models/category';
import { CardComponent } from '../card/card.component';
import { CategoryService } from 'src/app/services/category.service';
import {ConsumerService} from "../../services/consumerService/consumer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css'],
})
export class ListcategoriesComponent implements AfterViewInit, OnInit, OnDestroy {
  categories: Category[] = [];
  subscribers! : Subscription;
  constructor(private c: CategoryService, private consumer: ConsumerService) {}
  ngOnInit(): void {
    //this.categories = this.c.getCategories();
    this.subscribers = this.consumer.fetch<Category[]>('category').subscribe({
      next : (data) => this.categories = data,
      error : (e) => console.log(e)
    })
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe();
  }


  increment() {
    console.log('increment:');
    console.log(this.c.a);
    this.c.add(5);
  }
  @ViewChildren(CardComponent) children!: QueryList<CardComponent>;

  ngAfterViewInit(): void {
    console.log(this.children);
  }
  title: string = '';

  deleteParent(id: number) {
    this.consumer.remove<Category>('category',id).subscribe({
      next : () => this.categories = this.categories.filter((c) => c.id !=id),
      error : (e) => console.log(e)
    })
    this.categories = this.categories.filter((c) => c.id != id);
  }

  afficheDescription(id: number) {
    //foreach : ES
    this.categories.forEach((element) => {
      if (element.id == id) {
        alert(element.description);
      }
    });
    //filter : ES
    let category = this.categories.filter((element) => element.id == id)[0];
    alert(category.description);
  }

  affichage() {
    console.log('affichage child');
  }
}

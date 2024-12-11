import {Component, OnDestroy, OnInit} from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import {ConsumerService} from "../../services/consumerService/consumer.service";
import {CardComponent} from "../card/card.component";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit, OnDestroy {
  a: number = this.c.getA();
  subscribers!: Subscription;
  constructor(private c: CategoryService, private consumer : ConsumerService, private r: Router) {}
  ngOnInit(): void {
   this.a = this.c.getA();
  }
  category: Category = new Category();

  add() {
    this.category.available = true;
    this.consumer.add<CardComponent>('category', this.category).subscribe({
      next : () => this.r.navigate(['/home']),
      error : (e) => console.log(e)
    })
    //this.c.addToList(this.category);
    //console.log(this.category);
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe();
  }
}

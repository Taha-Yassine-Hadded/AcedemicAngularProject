import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListcategoriesComponent } from '../listcategories/listcategories.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  
  
  
  @ViewChild("child") child!: ListcategoriesComponent;
  // @ViewChild("test") t!: HTMLInputElement;

  ngAfterViewInit(): void {
    // console.log(this.t)
    console.log(this.child)
    this.child.affichage();
  }
}

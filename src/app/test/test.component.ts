import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  titre: string = 'Hello 4TWIN6';
  color: string = "red";
  user={id:'',name:''}
  product = {
    id: 1,
    name: 'phone',
    price: 200,
    quantity: 4,
    imgsrc:'/assets/test.jpg'
  };

  acheter() {
    this.product.quantity--;
  }

  onColorChange(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}

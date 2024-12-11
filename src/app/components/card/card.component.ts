import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  @Input({required:true}) id!: number;
  @Input() title!: string;
  @Input() available!: boolean;
  @Input() image!: string;
  @Input() price!: number;
  @Input() nb_likes!: number;

  @Output() d = new EventEmitter();
  @Output() l = new EventEmitter();

  test:string = 'test children'
  color!: string;
  deleteChild() {
    this.d.emit(this.id);
  }
  likeChild() {
    this.l.emit(this.id)
  }
}

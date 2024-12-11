import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-from-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-validation.component.html',
  styleUrls: ['./from-validation.component.css']
})
export class FromValidationComponent {

  @Input() control!: AbstractControl | NgModel;
}

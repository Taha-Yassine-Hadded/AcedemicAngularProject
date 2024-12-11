import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  //name!: FormControl;
  product!: FormGroup;
  a!: number;

  constructor(private fb:FormBuilder,private c:CategoryService,private p:ProductService){}
  ngOnInit() {
      this.a = this.c.getA()
    //this.name = new FormControl('', []);
   /* this.product = new FormGroup({
      name: new FormControl("",[Validators.required]),
      image: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      brand: new FormGroup({
        name: new FormControl(),
        logo: new FormControl(),
      }),
      promotion: new FormControl(),
      tags: new FormArray([new FormControl(), new FormControl()]),
    });*/
    // this.product = this.fb.group({
    //   name: ['',[Validators.required]],
    //   image: [''],
    //   description: [''],
    //   price: [''],
    //   brand: this.fb.group({
    //     name: [''],
    //     logo: [''],
    //   }),
    //   promotion: [''],
    //   tags: this.fb.array([this.fb.control(''),this.fb.control('')])
    // });
    this.product = this.fb.group({
      name: ['', [Validators.required]],
      image: [''],
      description: [''],
      price: [''],
      brand:[''],
      promotion: [''],
    });
  }

  get name() {
    return this.product.get('name')
  }
  get tags() {
    return (this.product.get('tags') as FormArray).controls as FormControl[]
  }

  addTag() {
    this.tags.push(new FormControl());
  }

  submit() {
    //console.log(this.name.value)
    //this.product.value.nb_likes = 0;
    //this.product.value.categoryId = 1;
    this.p.addToList(this.product.getRawValue());
    console.log(this.product.get('tags'));
    console.log(this.product.getRawValue())
    console.log(this.product.get('name'));
    console.log(this.product.get('brand')!.get('name'));
  }
}

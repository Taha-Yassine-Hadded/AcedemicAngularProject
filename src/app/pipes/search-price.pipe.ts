import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'searchPrice'
})
export class SearchPricePipe implements PipeTransform {

  transform(value: any[], price : number): any[] {
    if (price == 0) { return value };
    return value.filter(item => 
      item.price <= price
    )
  }

}

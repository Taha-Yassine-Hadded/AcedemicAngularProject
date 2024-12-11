import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ch:string): any[] {
    if (ch == '') return value;
    return value.filter((e)=>e.title.toLowerCase() == ch.toLowerCase())

  }

}

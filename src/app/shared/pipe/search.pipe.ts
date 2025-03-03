import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayofObject:any[] , text:string): any[] {
    return arrayofObject.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()));
  }

}

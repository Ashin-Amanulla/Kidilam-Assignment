import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;
    args = args.toLowerCase();
    if(args==='all') return value;

    if (!(args==='all')) {
      return value.filter((listing: any) => listing.Category.toLowerCase()===args);
  }
}

}

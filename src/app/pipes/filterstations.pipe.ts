import { Pipe, PipeTransform } from '@angular/core';
import { Dublinbike } from '../models/dublinbike';

@Pipe({
  name: 'filterstations'
})
export class FilterstationsPipe implements PipeTransform {

  transform(items: Dublinbike[], searchText: string): Dublinbike[] {
    
    if (!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(currentItem => { return currentItem.name.toLowerCase().includes(searchText)})
   
  }

}

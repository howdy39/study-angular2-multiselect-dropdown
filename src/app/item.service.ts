import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './item';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    const items: Item[] = [
      {'id': 0, 'itemName': 'ALL', 'category': ''},
      {'id': 1, 'itemName': 'Japan', 'category': 'Asia'},
      {'id': 2, 'itemName': 'Singapore', 'category': 'Asia'},
      {'id': 3, 'itemName': 'Australia', 'category': 'Australia'},
      {'id': 4, 'itemName': 'Canada', 'category': 'NorthAmerica'},
      {'id': 5, 'itemName': 'South Korea', 'category': 'Asia'},
      {'id': 6, 'itemName': 'Germany', 'category': 'Europe'},
      {'id': 7, 'itemName': 'France', 'category': 'Europe'},
      {'id': 8, 'itemName': 'Russia', 'category': 'Asia'},
      {'id': 9, 'itemName': 'Italy', 'category': 'Europe'},
      {'id': 10 , 'itemName': 'Sweden', 'category': 'Europe'}
    ];
    return of(items);
  }
}

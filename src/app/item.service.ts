import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './item';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    const items: Item[] = [
      {'id': 1, 'itemName': 'Japan'},
      {'id': 2, 'itemName': 'Singapore'},
      {'id': 3, 'itemName': 'Australia'},
      {'id': 4, 'itemName': 'Canada'},
      {'id': 5, 'itemName': 'South Korea'},
      {'id': 6, 'itemName': 'Germany'},
      {'id': 7, 'itemName': 'France'},
      {'id': 8, 'itemName': 'Russia'},
      {'id': 9, 'itemName': 'Italy'},
      {'id': 10 , 'itemName': 'Sweden'}
    ];
    return of(items);
  }
}

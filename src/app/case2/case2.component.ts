import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    console.log('AAA');
    setTimeout(() => {
      console.log('BBB')
      this.itemService.getItems().subscribe(items => this.dropdownList = items);
    }, 3000);

    this.selectedItems = [
      {'id': 2, 'itemName': 'Singapore'},
      {'id': 3, 'itemName': 'Australia'},
      {'id': 4, 'itemName': 'Canada'},
      {'id': 5, 'itemName': 'South Korea'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

}

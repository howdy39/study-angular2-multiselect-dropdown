import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-case3',
  templateUrl: './case3.component.html',
  styleUrls: ['./case3.component.css']
})
export class Case3Component implements OnInit {
  dropdownList = [];
  selectedItems = [];

  dropdownSettings: Angular2MultiselectDropdownSettings = {};

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    console.log('AAA');
    setTimeout(() => {
      console.log('BBB')
      this.itemService.getItems().subscribe(items => this.dropdownList = items);
    }, 3000);

    this.setDefaultSettings();

  }

  onItemSelect(item: any) {
    console.log('onItemSelect');
    if (item.itemName === 'ALL') {
      this.setSelectedAllSettings();
      this.selectedItems = this.selectedItems.filter((selectedItem) => {
        return (selectedItem.itemName === 'ALL');
      });
    } else {
      this.setDefaultSettings();
    }
  }
  onItemDeSelect(item: any) {
    console.log('onItemDeSelect');
    this.setDefaultSettings();
    console.log(this.dropdownSettings);
  }

  setSelectedAllSettings() {
    console.log('setSelectedAllSettings');
    this.dropdownSettings = {
      limitSelection: 1,
      singleSelection: true,
      enableSearchFilter: false,
    };
  }

  setDefaultSettings() {
    console.log('setDefaultSettings');
    this.dropdownSettings = {
      text: 'Select Countries',
      selectAllText: 'All',
      unSelectAllText: 'All',
      limitSelection: 20,
      singleSelection: false,
      enableCheckAll: false,
      enableSearchFilter: true,
    };
  }

}

interface Angular2MultiselectDropdownSettings {
  text?: string;
  selectAllText?: string;
  unSelectAllText?: string;
  singleSelection?: boolean;
  enableCheckAll?: boolean;
  limitSelection?: number;
  enableSearchFilter?: boolean;
}

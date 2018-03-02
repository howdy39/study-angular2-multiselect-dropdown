import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  formModel = {};

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.dropdownList = [
      {'id': 1, 'itemName': 'India'},
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

    this.formModel = {
      name: 'AAAA',
      email: 'aaaa@example.com',
      items: this.selectedItems
    };

    this.userForm = this.fb.group({
      name: 'BBBB',
      email: ['bbbb@example.com', Validators.required],
      items: [this.selectedItems, Validators.required]
    });
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
  onSubmitForTemplateDrivenForms(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }
  onSubmitForReactiveForms(formGroupDirective: FormGroupDirective) {
    console.log(formGroupDirective);
    console.log(formGroupDirective.value);
  }

}

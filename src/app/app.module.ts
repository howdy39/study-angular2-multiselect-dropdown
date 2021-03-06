import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Case1Component } from './case1/case1.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Case2Component } from './case2/case2.component';
import { ItemService } from './item.service';
import { Case3Component } from './case3/case3.component';
import { Case4Component } from './case4/case4.component';
import { Case4ChildComponent } from './case4/case4-child/case4-child.component';


@NgModule({
  declarations: [
    AppComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    Case4ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

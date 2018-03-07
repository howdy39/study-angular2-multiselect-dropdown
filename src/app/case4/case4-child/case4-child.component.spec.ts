import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case4ChildComponent } from './case4-child.component';

describe('Case4ChildComponent', () => {
  let component: Case4ChildComponent;
  let fixture: ComponentFixture<Case4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

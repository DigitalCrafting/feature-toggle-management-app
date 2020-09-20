import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditCustomersListComponent} from './edit-customers-list.component';
import {FormArray, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('EditCustomersListComponent', () => {
  let component: EditCustomersListComponent;
  let fixture: ComponentFixture<EditCustomersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomersListComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomersListComponent);
    component = fixture.componentInstance;
    component.customersList = new FormArray([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EditCustomersListComponent);
    component = fixture.componentInstance;
    component.customersList = new FormArray([]);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Customers');
  });
});

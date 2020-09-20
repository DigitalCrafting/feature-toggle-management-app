import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTogglePopupComponent} from './edit-toggle-popup.component';
import {EditCustomersListComponent} from "./edit-customers-list/edit-customers-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('EditTogglePopupComponent', () => {
  let component: EditTogglePopupComponent;
  let fixture: ComponentFixture<EditTogglePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditTogglePopupComponent,
        EditCustomersListComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTogglePopupComponent);
    component = fixture.componentInstance;
    component.initPopup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.formGroup).toBeTruthy();
    expect(component.isCreate).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EditTogglePopupComponent);
    component = fixture.componentInstance;
    component.initPopup();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.modal-title').textContent).toContain('Create toggle');
  });
});

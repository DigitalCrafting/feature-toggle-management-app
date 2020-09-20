import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TogglesListComponent} from './toggles-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('TogglesListComponent', () => {
  let component: TogglesListComponent;
  let fixture: ComponentFixture<TogglesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglesListComponent ],
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
    fixture = TestBed.createComponent(TogglesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TogglesListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Feature toggles');
  });
});

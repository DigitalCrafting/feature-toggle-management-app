import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TogglesListComponent} from "./feature-toggles/components/toggles-list/toggles-list.component";
import {EditTogglePopupComponent} from "./feature-toggles/components/edit-toggle-popup/edit-toggle-popup.component";
import {EditCustomersListComponent} from "./feature-toggles/components/edit-toggle-popup/edit-customers-list/edit-customers-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TogglesListComponent,
        EditTogglePopupComponent,
        EditCustomersListComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

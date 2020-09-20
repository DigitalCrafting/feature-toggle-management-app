import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from './app.component';
import {DynamicComponentManager} from './core/dynamic-component-manager/dynamic-component-manager';
import { TogglesListComponent } from './feature-toggles/components/toggles-list/toggles-list.component';
import { EditTogglePopupComponent } from './feature-toggles/components/edit-toggle-popup/edit-toggle-popup.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCustomersListComponent } from './feature-toggles/components/edit-toggle-popup/edit-customers-list/edit-customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentManager,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

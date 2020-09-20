import {Component, ViewChild} from '@angular/core';
import {DynamicComponentManager} from "./core/dynamic-component-manager/dynamic-component-manager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("dynamicComponentManager") dynamicComponentManager: DynamicComponentManager;

  title = 'frontend';
}

import {Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-manager',
  template: `<ng-template #container></ng-template>`
})
export class DynamicComponentManager implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef }) container;

  private _cmpRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  public show(componentType: any): any {
    if (this._cmpRef) {
      this._cmpRef.destroy();
    }

    const fact = this.resolver.resolveComponentFactory(componentType);
    this._cmpRef = this.container.createComponent(fact);

    return this._cmpRef.instance;
  }

  ngOnDestroy() {
    if (this._cmpRef) {
      this._cmpRef.destroy();
    }
  }

}

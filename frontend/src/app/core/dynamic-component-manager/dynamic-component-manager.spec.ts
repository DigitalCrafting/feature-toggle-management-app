import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentManager } from './dynamic-component-manager';

describe('DynamicComponentManagerComponent', () => {
  let component: DynamicComponentManager;
  let fixture: ComponentFixture<DynamicComponentManager>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentManager ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

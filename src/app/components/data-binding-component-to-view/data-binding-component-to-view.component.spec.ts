import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponentToViewComponent } from './data-binding-component-to-view.component';

describe('DataBindingComponentToViewComponent', () => {
  let component: DataBindingComponentToViewComponent;
  let fixture: ComponentFixture<DataBindingComponentToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingComponentToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponentToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

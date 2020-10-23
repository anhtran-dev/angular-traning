import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingViewToComponentComponent } from './event-binding-view-to-component.component';

describe('EventBindingViewToComponentComponent', () => {
  let component: EventBindingViewToComponentComponent;
  let fixture: ComponentFixture<EventBindingViewToComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingViewToComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingViewToComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

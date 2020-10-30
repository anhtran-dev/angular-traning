import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSerivceSecondComponent } from './demo-serivce-second.component';

describe('DemoSerivceSecondComponent', () => {
  let component: DemoSerivceSecondComponent;
  let fixture: ComponentFixture<DemoSerivceSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSerivceSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSerivceSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

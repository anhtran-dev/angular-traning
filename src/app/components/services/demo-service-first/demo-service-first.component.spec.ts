import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceFirstComponent } from './demo-service-first.component';

describe('DemoServiceFirstComponent', () => {
  let component: DemoServiceFirstComponent;
  let fixture: ComponentFixture<DemoServiceFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoServiceFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServiceFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

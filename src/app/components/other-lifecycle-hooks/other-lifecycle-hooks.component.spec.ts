import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLifecycleHooksComponent } from './other-lifecycle-hooks.component';

describe('OtherLifecycleHooksComponent', () => {
  let component: OtherLifecycleHooksComponent;
  let fixture: ComponentFixture<OtherLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

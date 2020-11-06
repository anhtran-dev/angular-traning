import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServeComponent } from './json-serve.component';

describe('JsonServeComponent', () => {
  let component: JsonServeComponent;
  let fixture: ComponentFixture<JsonServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

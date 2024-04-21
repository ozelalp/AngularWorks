import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputSampleComponent } from './input-output-sample.component';

describe('InputOutputSampleComponent', () => {
  let component: InputOutputSampleComponent;
  let fixture: ComponentFixture<InputOutputSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

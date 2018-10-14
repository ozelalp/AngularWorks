import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSampleComponent } from './attribute-sample.component';

describe('AttributeSampleComponent', () => {
  let component: AttributeSampleComponent;
  let fixture: ComponentFixture<AttributeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

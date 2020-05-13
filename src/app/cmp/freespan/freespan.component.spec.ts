import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreespanComponent } from './freespan.component';

describe('FreespanComponent', () => {
  let component: FreespanComponent;
  let fixture: ComponentFixture<FreespanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreespanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreespanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

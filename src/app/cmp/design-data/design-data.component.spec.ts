import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDataComponent } from './design-data.component';

describe('DesignDataComponent', () => {
  let component: DesignDataComponent;
  let fixture: ComponentFixture<DesignDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskBasedInspectionComponent } from './risk-based-inspection.component';

describe('RiskBasedInspectionComponent', () => {
  let component: RiskBasedInspectionComponent;
  let fixture: ComponentFixture<RiskBasedInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskBasedInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskBasedInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

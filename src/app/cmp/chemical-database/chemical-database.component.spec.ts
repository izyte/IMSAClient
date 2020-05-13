import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalDatabaseComponent } from './chemical-database.component';

describe('ChemicalDatabaseComponent', () => {
  let component: ChemicalDatabaseComponent;
  let fixture: ComponentFixture<ChemicalDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

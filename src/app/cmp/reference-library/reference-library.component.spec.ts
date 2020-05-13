import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceLibraryComponent } from './reference-library.component';

describe('ReferenceLibraryComponent', () => {
  let component: ReferenceLibraryComponent;
  let fixture: ComponentFixture<ReferenceLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

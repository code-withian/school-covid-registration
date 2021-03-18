import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFacultyInformationComponent } from './school-faculty-information.component';

describe('SchoolFacultyInformationComponent', () => {
  let component: SchoolFacultyInformationComponent;
  let fixture: ComponentFixture<SchoolFacultyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolFacultyInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolFacultyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

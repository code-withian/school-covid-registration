import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorContactInformationComponent } from './doctor-contact-information.component';

describe('DoctorContactInformationComponent', () => {
  let component: DoctorContactInformationComponent;
  let fixture: ComponentFixture<DoctorContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorContactInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

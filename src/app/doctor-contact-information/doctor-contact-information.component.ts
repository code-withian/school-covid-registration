import { Component, OnInit } from '@angular/core';

interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-doctor-contact-information',
  templateUrl: './doctor-contact-information.component.html',
  styleUrls: ['./doctor-contact-information.component.css'],
})
export class DoctorContactInformationComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  states: State[] = [
    { value: 'TN', viewValue: 'TN' },
    { value: 'KY', viewValue: 'KY' },
    { value: 'IL', viewValue: 'IL' },
    { value: 'IN', viewValue: 'IN' },
    { value: 'OH', viewValue: 'OH' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

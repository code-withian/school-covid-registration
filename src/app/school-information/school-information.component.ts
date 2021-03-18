import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface State {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-school-information',
  templateUrl: './school-information.component.html',
  styleUrls: ['./school-information.component.css'],
})
export class SchoolInformationComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  states: State[] = [
    { value: 'TN', viewValue: 'TN' },
    { value: 'KY', viewValue: 'KY' },
    { value: 'IL', viewValue: 'IL' },
    { value: 'IN', viewValue: 'IN' },
    { value: 'OH', viewValue: 'OH' },
  ];

  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

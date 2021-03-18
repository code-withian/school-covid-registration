import { Component, OnInit } from '@angular/core';

interface Grade {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-school-faculty-information',
  templateUrl: './school-faculty-information.component.html',
  styleUrls: ['./school-faculty-information.component.css'],
})
export class SchoolFacultyInformationComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  grades: Grade[] = [
    { value: 'K', viewValue: 'K' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
  ];

  types: Type[] = [
    { value: 'Public', viewValue: 'Public' },
    { value: 'Charter', viewValue: 'Charter' },
    { value: 'Private', viewValue: 'Private' },
    { value: 'Other', viewValue: 'Other' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

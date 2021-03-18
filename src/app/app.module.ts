import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolInformationComponent } from './school-information/school-information.component';
import { DoctorContactInformationComponent } from './doctor-contact-information/doctor-contact-information.component';
import { SchoolFacultyInformationComponent } from './school-faculty-information/school-faculty-information.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    HeaderComponent,
    DashboardComponent,
    SchoolInformationComponent,
    DoctorContactInformationComponent,
    SchoolFacultyInformationComponent,
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OverviewComponent } from './Dashboard/overview/overview.component';
import { AddEmployeeComponent } from './Dashboard/add-employee/add-employee.component';
import { MyTeamComponent } from './Dashboard/my-team/my-team.component';
import { RegistrationComponent } from './Dashboard/registration/registration.component';
import { MeetingUpdatesComponent } from './Dashboard/meeting-updates/meeting-updates.component';
import { RaiseComplaintComponent } from './Dashboard/raise-complaint/raise-complaint.component';
import { ViewComplaintComponent } from './Dashboard/view-complaint/view-complaint.component';
import { ViewAttendanceComponent } from './Dashboard/view-attendance/view-attendance.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ScreenComponent } from './Dashboard/screen/screen.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OverviewComponent,
    AddEmployeeComponent,
    MyTeamComponent,
    RegistrationComponent,
    MeetingUpdatesComponent,
    RaiseComplaintComponent,
    ViewComplaintComponent,
    ViewAttendanceComponent,
    ErrorPageComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

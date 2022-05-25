import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ScreenComponent } from './Dashboard/screen/screen.component';
import { ErrorPgComponent } from './error-pg/error-pg.component';
import { EmployeesComponent } from './Dashboard/employees/employees.component';
import { ROleComponent } from './Dashboard/role/role.component';
import { CreateTrainingComponent } from './Dashboard/create-training/create-training.component';
import { TicketStatusComponent } from './Dashboard/ticket-status/ticket-status.component';
import { TrainingHistroyComponent } from './Dashboard/training-histroy/training-histroy.component';
import { NotificationComponent } from './Dashboard/notification/notification.component';
import { FeedbackReportComponent } from './Dashboard/feedback-report/feedback-report.component'
import { AssignTrainingComponent } from './Dashboard/assign-training/assign-training.component';
import { SearchBarComponent } from './Dashboard/SmallComp/search-bar/search-bar.component';
import { ProfileViewComponent } from './Dashboard/SmallComp/profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScreenComponent,
    ErrorPgComponent,
    EmployeesComponent,
    ROleComponent,
    CreateTrainingComponent,
    AssignTrainingComponent,
    TicketStatusComponent,
    TrainingHistroyComponent,
    NotificationComponent,
    FeedbackReportComponent,
    SearchBarComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignTrainingComponent } from './Dashboard/assign-training/assign-training.component';
import { CreateTrainingComponent } from './Dashboard/create-training/create-training.component';
import { EmployeesComponent } from './Dashboard/employees/employees.component';
import { FeedbackReportComponent } from './Dashboard/feedback-report/feedback-report.component';
import { NotificationComponent } from './Dashboard/notification/notification.component';
import { ROleComponent } from './Dashboard/role/role.component';
import { ScreenComponent } from './Dashboard/screen/screen.component';
import { TicketStatusComponent } from './Dashboard/ticket-status/ticket-status.component';
import { TrainingHistroyComponent } from './Dashboard/training-histroy/training-histroy.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', redirectTo : 'Login', pathMatch: 'full'},
  {path : 'Login', component: LoginComponent},
  {path : 'Dashboard', component : ScreenComponent, children : [
    {path : '', redirectTo : 'Employees', pathMatch : 'full'},
    {path : 'Employees', component : EmployeesComponent},
    {path : 'Role', component : ROleComponent},
    {path : 'CreateTraining', component : CreateTrainingComponent},
    {path : 'AssignTraining', component : AssignTrainingComponent},
    {path : 'TicketStatus', component : TicketStatusComponent},
    {path : 'TrainingHistory', component : TrainingHistroyComponent},
    {path : 'Notifications', component : NotificationComponent},
    {path : 'Feedback', component : FeedbackReportComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

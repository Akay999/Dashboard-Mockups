import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './Dashboard/overview/overview.component';
import { ScreenComponent } from './Dashboard/screen/screen.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path : '', redirectTo : 'Dashboard', pathMatch : 'full'},
  {path : 'Login', component : LoginPageComponent},
  {path : 'Dashboard', component : ScreenComponent , children : [
    {path : '', redirectTo : 'Overview', pathMatch : 'full'},
    {path : 'Overview', component : OverviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { ImportComponent } from './import/import.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RapportComponent } from './rapport/rapport.component';
import { StatsComponent } from './stats/stats.component';
import { StepTwoReportComponent } from './step-two-report/step-two-report.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        component: StatsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'rapport',
        component: ImportComponent,
      },
      {
        path: 'stepTwoReport',
        component: StepTwoReportComponent,
      },
      {
        path: 'archive',
        component: ArchiveComponent,
      },
      {
        path: 'finalReport',
        component: RapportComponent,
      },
      {
        path: 'usersList',
        component: UsersListComponent,
      },
      {
        path: 'registerUser',
        component:AdduserComponent,
      }
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

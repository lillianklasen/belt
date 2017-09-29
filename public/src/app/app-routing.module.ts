import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { AppointmentsListComponent } from './dashboard/appointments-list/appointments-list.component';
import { AppointmentsNewComponent } from './dashboard/appointments-new/appointments-new.component';



const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children:  [
            {path: '', pathMatch: 'full', component: LoginComponent},
            {path: 'dashboard', pathMatch: 'full', component: AppointmentsListComponent},
            {path: 'new_appointment', pathMatch: 'full', component: AppointmentsNewComponent},

        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

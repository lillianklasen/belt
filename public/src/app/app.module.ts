import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';

import { UserService } from './user.service';
import { AppointmentService } from './appointment.service';

import { AppointmentsListComponent } from './dashboard/appointments-list/appointments-list.component';
import { AppointmentsNewComponent } from './dashboard/appointments-new/appointments-new.component';
;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AppointmentsListComponent,
    AppointmentsNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

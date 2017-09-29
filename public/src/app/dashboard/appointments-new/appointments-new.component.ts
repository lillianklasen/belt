import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AppointmentService } from '../../appointment.service';
import { User } from '../../user';
import { Appointment } from '../../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-new',
  templateUrl: './appointments-new.component.html',
  styleUrls: ['./appointments-new.component.css']
})
export class AppointmentsNewComponent implements OnInit {
  newAppointment: Appointment  = new Appointment();
  errors: string[] = [];
  currentUser: User = new User();

  constructor(
      private _appointmentService: AppointmentService,
      private _userService: UserService,
      private _router: Router
  ) { }

  ngOnInit() {
      this.getCurrentUser();
  }

  createAppointment(){
    this.errors = [];
    this._appointmentService.create(this.newAppointment, (appointment) => {
        if (appointment.errors) {
            for (const key of Object.keys(appointment.errors)) {
                const error = appointment.errors[key];
                this.errors.push(error.message);
            }
        }
        else {
            this._router.navigateByUrl('/dashboard')
        }
    })
}

getCurrentUser() {
    this._userService.session((res) => {
        if(res.status == false) {
            this._router.navigateByUrl('/');
        } else {
            this.currentUser = res;
        }
    })
}

}

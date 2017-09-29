import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AppointmentService } from '../../appointment.service';
import { User } from '../../user';
import { Appointment } from '../../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments: Appointment[] = [];
  users: User[] = [];
  newAppointment: Appointment = new Appointment();
  errors: string[] = [];
  currentUser: User = new User;

  constructor(
      private _appointmentService: AppointmentService,
      private _userService: UserService,
      private _router: Router
  ) { }

  ngOnInit() {
      this.getAppointments();
      this.getCurrentUser();
  }

  getAppointments(){
    this._appointmentService.index((appointments) => this.appointments = appointments)
}

logout(){
     this._userService.logout((res) => {
         console.log(res);
         this._router.navigateByUrl('/');
     });
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

destroyAppointment(id:string, idx:number){
    this._appointmentService.destroy(id, res => this.appointments.splice(idx, 1));
}


}

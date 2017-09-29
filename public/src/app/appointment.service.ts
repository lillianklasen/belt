import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Appointment } from './appointment';

@Injectable()
export class AppointmentService {

  constructor(
      private _http: Http
  ) { }

  index(callback){
     this._http.get('/appointments').subscribe(
         res => callback(res.json()),
         err => console.log(err)
     )
 }

 destroy(id: string, callback) {
    this._http.delete(`appointments/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(newAppointment: Appointment, callback){
     this._http.post('/appointments', newAppointment).subscribe(
         res => callback(res.json()),
         err => console.log(err)
     )
  }

}

var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var User = mongoose.model('User');

class AppointmentsController {
    index(req, res){
        Appointment.find({}).populate({ path: 'user', model: 'User'}).exec((err, appointments) => {
            if(err){
                return res.json(err);
            }
            return res.json(appointments);
        })
    }

    create(req, res){
        req.body.user = req.session.user;

        Appointment.create({date: req.body.date, time: req.body.time, complaint: req.body.complaint, user: req.session.user},  (err, appointment) => {
            if(err) {
                return res.json(err);
            } else {
                User.findByIdAndUpdate(req.session.user, { $push: { appointments: appointment._id }}, {new: true}, (err, user) => {
                    if (err) {
                        console.log(err);
                    } else {
                        return res.json(appointment);
                    }
                })
            }
    	})
    }

    destroy(req, res){
        Appointment.findByIdAndRemove(req.params.id, (err, appointment) => {
            if(err){
                return res.json(err);
            }
            return res.json({
                'success': 'successfully deleted appointment'
            });
        })
    }
}

module.exports = new AppointmentsController();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let AppointmentSchema = new mongoose.Schema({
    date: {
        type:Date,
        required: [true, 'Date is required'],
        min: [Date.now(), 'Date must be in the future']
    },

    time: {
        type:String,
        required: [true, 'Time is required'],
    },

    complaint: {
        type:String,
        required: [true, 'Complaint is required'],
        minlength: [10, 'Complaint must be at least 10 characters'],
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},
{timestamps: true});


mongoose.model('Appointment', AppointmentSchema);

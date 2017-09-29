var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],

}, {timestamps: true });

var User = mongoose.model('User', UserSchema);

var mongoose = require('mongoose');
var User = mongoose.model('User');

class UsersController {
    index(req, res) {
    	User.find({}, (err, users) => {
    		if(err){
    			return res.json(err);
    		}
    		return res.json(users);
    	})
    }

    create(req, res) {
        User.findOne({name: req.body.name}, (err, user) => {

            if(err){
                return res.json(err);
            }
            else if (!user) {
                User.create(req.body, (err, newUser) => {
                    req.session.user = newUser._id;
                    return res.json(newUser);
                })
            }
            else {
                req.session.user = user._id;
                return res.json(user);
            }
        })
    }

    session(req, res) {
        if(!req.session.user){
            return res.json({status: false});
        }
        User.findById(req.session.user, (err, user) => {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        })
    }

    logout(req, res) {
        delete req.session.user;
        return res.json({status: true});
    }

}

module.exports = new UsersController();

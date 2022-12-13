let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let User = require('../models/User');

// CREATE Student
router.route('/register').post((req , res , next) => {
    User.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          console.log(data)
          res.json(data)
        }
      })
});
router.route('/signin').post((req , res , next) => {
  console.log('xxx')
    User.findOne({email: req.body.email} , (err , data) => {
        if(err) throw err;
        if(!data){
            return res.status(400).json({message: "Email not found"});
        }
        if(data.password == req.body.password){
            return res.json({isAuthenticated: true , user: data});
        }
        return res.json({isAuthenticated: false});
    });
});

router.route('/edit-profile').put((req , res , next) => {
    User.findOneAndUpdate({email: req.body.email} , {$set: req.body} , (err , data) => {
        if(err) throw err;
        return re.json(data);
    });
});


module.exports = router

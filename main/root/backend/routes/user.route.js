//Endpoints for Users in library database
express = require('express');
router = express.Router();

//Get UserModel which we defined in Models/
let User = require('../Models/User');


// @route POST /register
// @desc Register/Create a single user
// @access Public
router.route('/register').post((req , res , next) => {
    User.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json(data);
        }
      });
});

// @route POST /signin
// @desc  Login existing user
// @access Public
router.route('/signin').post((req , res , next) => {
    //Since authenticating by email, first check if email exists in collection
    User.findOne({email: req.body.email}, (err , data) => {
        if(err) throw err;
        if(!data){
          console.log(data);
          return res.status(400).json({message: "Email not found!"});
        }
        if(data.password == req.body.password){
            //Email found in collection + form password (from request) is matching
            return res.json({isAuthenticated: true , User: data});
        }
        //Otherwise, will remain unauthenticated (public)
        return res.json({isAuthenticated: false});
    });
});

// @route POST /edit-profile
// @desc  Edit existing user profile
// @access Private
router.route('/edit-profile').put((req , res , next) => {
    User.findOneAndUpdate({email: req.body.email} , 
      //Get setting values from form
      { $set: 
        req.body
      }, (err , data) => {
        if(err) throw err;
        return re.json(data);
    });
});


module.exports = router

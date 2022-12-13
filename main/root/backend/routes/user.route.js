express = require('express'),
router = express.Router()

//Get model of User which was defined in Models/
let User = require('../models/User');

// @route POST http://localhost:4000/user/register
// @desc Register/Create a single user
// @access Public
router.route('/register').post(async (req , res , next) => {
  // await User.syncIndexes();
    User.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          console.log(data);
          res.json(data);
        }
      })
});

// @route POST http://localhost:4000/user/signin
// @desc Login existing user
// @access Public
router.route('/signin').post((req , res , next) => {
  console.log('Signed in as ' + req.body.email);
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

// @route PUT http://localhost:4000/user/edit-profile
// @desc  Edit existing user profile
// @access Private
router.route('/edit-profile').put((req , res , next) => {
    User.findOneAndUpdate({email: req.body.email}, 
      {$set: req.body}, 
      (err , data) => {
        if(err) throw err;
        return re.json(data);
    });
});

module.exports = router

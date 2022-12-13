//Book-related CRUD endpoints for library

express = require('express');
router = express.Router()

//Book Model (https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)
let Book = require('../models/Book');

//@route POST /create-book
//@desc As an admin, create new book entry and add to library database collection
//@access Private
router.route('/create-book').post((req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//READ Books
router.route('/').get((req, res) => {
  Book.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Get Single Book by id
router.route('/view-book/:id').get((req, res) => {
  Book.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  })
})

//@route PUT /update-book/:id
//@desc As an admin, Update single (existing) book by id
//@access Private
router.route('/update-book/:id').put((req, res, next) => {

  Book.findByIdAndUpdate(req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data);
        console.log('Book record has been updated successfully!')
      }
    },
  )
})

//@route DELETE /delete-book/:id
//@desc As an admin, delete existing book entry and remove it from library database collection
//@access Private
router.route('/delete-book/:id').delete((req, res, next) => {
  Book.findByIdAndRemove(req.params.id,
    //No setting stuff here 
    (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      });
      console.log("Book record has been deleted successfully from the database!");
    }
  })
})

module.exports = router

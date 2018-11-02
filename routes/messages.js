const express = require('express');
const mongoose = require('mongoose');
const Messages = require('../models/message');
const passport = require('passport');

const router = express.Router();

router.use('/messages',passport.authenticate('jwt',{session:false,failWithError:true}));

router.get('/messages',function(req,res,next){
// console.log(req)
const userId = req.user.id
console.log("this is our ",userId)
Messages.find({userId})
.then(results =>{
    console.log("this is our message",results)
    res.json(results)
}
)
.catch(err =>
next(err)

)
});
router.get('/messages/:id', (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const err = new Error('The `id` is not valid');
      err.status = 400;
      return next(err);
    }
  
    Messages.findOne({ _id: id, userId })
      .then(result => {
        if (result) {
            console.log("this is our results",result)
          res.json(result);
        } else {
          next();
        }
      })
      .catch(err => {
        next(err);
      });
  });
router.post('/messages',(req,res,next)=>{
    console.log(req.body);
    const { message } = req.body;
    const userId = req.user.id;
    console.log(userId);
  
    const newMessage = { message, userId };
  
    Messages.create(newMessage)
      .then(result => {
        res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
})


module.exports = router;
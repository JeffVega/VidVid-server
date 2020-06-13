'use strict';

const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  
    message:{
        type:String,
        required:true
    },
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }

});


messageSchema.set('toObject',{
    transform: function(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})
 module.exports = mongoose.model('Messages',messageSchema);

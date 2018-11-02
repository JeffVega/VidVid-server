'use strict';

const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String
    },

});


messageSchema.set('toObject',{
    transform: function(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})
const Messages = mongoose.model('Message',messageSchema);
module.exports = Messages
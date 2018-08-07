const mongoose = require('mongoose');


const friendSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    FriendShip:{
        type:boolean,
        required:true

    }
});
messageSchema.set('toObject',{
    transform: function(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})
const Friend = mongoose.model('Friends',friendSchema);
module.exports = Friend
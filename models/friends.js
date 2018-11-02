const mongoose = require('mongoose')


const friendSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'Users'},
    recipient: { type: Schema.Types.ObjectId, ref: 'Users'},
    status: {
      type: Number,
      friends: [
          0,    //'add friend',
          1,    //'requested',
          2,    //'pending',
          3,    //'friends'
      ]
    }
  }, {timestamps: true})

  friendSchema.set('toObject',{
    transform: function(doc,ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})
  module.exports = mongoose.model('Friends', friendsSchema)
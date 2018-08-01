'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {DATABASE_URL} = require('./config');


function dbConnect(url = DATABASE_URL){
    return mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.info(`connected to : ${DATABASE_URL}`)
    })
    .catch(err => {
        console.log('Mongoose failed to connect')
        console.log(err)
    })
}

function dbDisconnet(){
    return mongoose.disconnect();
}
function dbGet(){
    return mongoose;
}
module.exports = {
    dbConnect,
    dbDisconnet,
    dbGet
}
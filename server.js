'use strict';
require('dotenv').config();
 const express = require('express');
 const cors = require('cors');
 const morgan = require('morgan');
 const passport = require('passport')
 //const passport 

 const {PORT,CLIENT_ORIGIN} = require('./config');
 const {dbConnect} = require('./db-mongoose')

 const localStrategy = require('./auth/local-strategy');
 const jwtStrategy = require('./auth/jwt');

 const userRouter = require('./routes/users');
 const authRouter = require('./routes/auth');

 const app = express();
 app.use(express.json());

 passport.use(localStrategy);
 passport.use(jwtStrategy);

 app.use(
	 morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev',{
		 skip:(req,res) => process.env.NODE_ENV === 'test'
	 })
 )

 app.use(
	 cors({
		origin:CLIENT_ORIGIN
	 })
 )
 app.use('/api',userRouter)
 app.use('/api',authRouter)

 // Catch-all 400
 app.use(function (req,res,next){
	 const err = new Error('Not Found');
	 err.status = 404;
	 next(err);
 })

 app.use(function (err,req,res,next){
	 res.status(err.status || 500);
	 res.json({
		 message:err.message,
		 error:app.get('env') === 'development' ? err : {}
	 });
 });

 function runServer(port = PORT){
	 const server = app
	 .listen(port, () =>{
		 console.info(`Application listening on port ${server.address().port}`);
	 }).on('error',err =>{
			 console.error('Express has failed to start');
			console.error(err);
		 })
 }
 if(require.main === module){
	 dbConnect();
	 runServer();
 }
 module.exports = {app};
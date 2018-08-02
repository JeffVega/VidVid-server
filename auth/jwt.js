'use strict';

const {Strategy:JwtStrategy,ExtractJwt} = require('passport-jwt');
const passport = require('passport');

//Setting up JWT login strategy
const {JWT_SECRET} = require('../config');
console.log(`This is your JWT SECERT shhhh.. ${JWT_SECRET}`);

const options = {
    secretOrKey:process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    algorithms:['HS256']

}
const jwtStrategy = new JwtStrategy(options, (payload, done) => {
    done(null, payload.user);
  });


module.exports = jwtStrategy;

// console.log(`This is your JWT SECERT shhhh.. ${JWT_SECERT}`);
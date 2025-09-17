require('dotenv').config()
const express = require('express');
const session = require('express-session');
const passport = require('passport')
const authRoute = require('./authRoutes')


require('./passport')
const app = express()

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session())


app.use('/', authRoute);

app.listen(process.env.PORT, () => {
  console.log("Listening on 3000");
})

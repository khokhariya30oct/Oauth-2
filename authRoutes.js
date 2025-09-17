const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get("/", (req, res) => {
  res.send(`<a href="/auth/google">Login with Google</a>`);
});

// Google Oauth 2.0 init
router.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback
router.get('/auth/google/callback', passport.authenticate('google',{ failureRedirect : '/'}), (req, res) => {
  // Success
  res.send(`<h1>Hello ${req.user.displayName}</h1><a href="/logout">Logout</a>`);
})

router.get('/logout', (req, res) => {
  req.logOut()
  res.redirect('/')
})


module.exports = router;
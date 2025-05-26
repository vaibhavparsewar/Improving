const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const passport = require("passport");
//Render login page
exports.getLogin = asyncHandler((req, res) => {
  res.render("login", {
    title: "Login",
    error: "",
    user: req.user,
  });
});

//! Login logic
// npm i passport-local express-session connect-mongo(to save session in data base) passport     configure passport in passport.js file in config folder
exports.login = asyncHandler(async (req, res, next) => {
  //🔥🔥
  passport.authenticate("local", (err, user, info) => {
    //passport.js.com where we used passport local to authenticate
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render("login", {
        title: "Login",
        user: req.user, //getting from the passport config
        error: info.message,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/user/profile");
    });
  })(req, res, next);
});

//!Get register page
exports.getRegister = asyncHandler((req, res) => {
  res.render("register", {
    title: "Register",
    user: req.user,
    error: "",
  });
});

//!Register logic
exports.register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body; //name fields from input will contains value
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.render("register", {
        title: "Register", //so can access in ejs template to view error
        user: req.user,
        error: "User already exists",
      });
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //else create new user document save user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.redirect("/auth/login");
  } catch (error) {
    res.render("register", {
      title: "Register",
      user: req.user,
      error: error.message,
    });
  }
});
//!Logout
exports.logout = asyncHandler((req, res) => {
  req.logout((err) => {
    //from passport configuration
    if (err) {
      return next(err);
    }
    res.redirect("/auth/login");
  });
});

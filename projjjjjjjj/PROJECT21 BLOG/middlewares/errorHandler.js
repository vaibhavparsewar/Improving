//!sending the server side error to the user
const errorHandler = (err, req, res, next) => {
  //use it in app.js app.use(errorHandler)
  res.status(err.status || 500);
  res.render("error", {
    //?error.ejs is file to be rented
    title: "Error",
    error: err.message,
    user: req.user,
  });
};

module.exports = errorHandler;

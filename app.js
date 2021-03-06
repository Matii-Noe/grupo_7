var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index.routes");
var productsRouter = require("./routes/products.routes");
var usersRouter = require("./routes/users.routes");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
var userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
var apiUsersRouter = require('./routes/api/apiUsers.routes');
var apiProductsRouter = require('./routes/api/apiProducts.routes')
var cors = require('cors')

var app = express();
/* MIDDLEWARES*/

app.use(
  session({
    secret: "Esto es un secreto wow",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
/* app.use(logger("dev"));
 */app.use(express.json());
app.use(userLoggedMiddleware)
app.use(cors())
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* RUTAS DE INDEX */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

//RUTAS DE APIs
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
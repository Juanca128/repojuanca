var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'caracteresclave',
  resave: false,
  saveUninitialized: true

}));

//app.use('/', indexRouter);           //linea comentada para anularla del programa
//app.use('/users', usersRouter);      //linea comentada para anularla del programa


app.get('/', function (req, res) {
  peso_vehi = Number(req.session.peso_vehi);

  res.render('liviano', {
    title: 'Tarea M4U4',
    peso_vehi: req.session.peso_vehi,

  });


});


app.post('/ingreso', function (req, res) {

  var peso = 1000;

  var auto1 = req.body.peso_vehi; //captura el valor del campo con nombre "peso_vehi" y almacena en variable "auto1"
  console.log(auto1);
  

  if (auto1 > peso) {
    res.render('pesado', {
      title: 'Tarea M4U4',
      peso_vehi: auto1,
      
    });

  }
  else {
    res.render('liviano', {
      title: 'Tarea M4U4',
      peso_vehi: req.body.peso_vehi,

    });

  }

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

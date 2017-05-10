let https    = require('https');
let fs       = require('fs');
let express  = require('express');
let path     = require('path');
let favicon  = require('serve-favicon');
let logger   = require('morgan');
let index    = require('./routes/index');
let accounts = require('./routes/accounts');
let modules  = require('./routes/modules');
let data     = require('./routes/data');
let port     = 3100;
let busboy   = require('connect-busboy');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');

let config = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: '1234'
};

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/accounts', accounts);
app.use('/modules', modules);
app.use('/data', data);

// catch 404 and forward to error handler
app.use(function(req, res, next){
    res.status(404);
    res.sendfile('public/404.html');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = https.createServer(config, app).listen(port, () => {

});

module.exports = app;
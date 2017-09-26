var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var index = require('./routes/index');

// initialize expressjs
var app = express();

// set the view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set path
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);


// Tell app to listen to port - this is for development purposes
/*app.listen(3000, function(){
   console.log('The application is running on localhost'); 
});*/


// Tell the app to listen on the production environment port in production
app.listen(process.env.PORT || 3000);
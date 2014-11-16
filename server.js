var debug = require('debug')('flickrogram');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var Routes = require('./server/routes');

app.set('views', path.join(__dirname, 'server/views'));
app.engine('jade', require('jade').__express);
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.param('user', function(req, res, next, user){
  if (user === 'api') {
    next(new Error());
  } else {
    next();
  }
});
app.get('/', Routes.index);
app.get('/:user', Routes.index);

app.get('/api/users/:user', Routes.userInfo);
app.get('/api/users/:user/photos', Routes.userPhotos);


app.listen(3000);

debug('Server started: http://localhost:3000/');

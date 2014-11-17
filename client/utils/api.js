var request = require('superagent');
var Actions = require('../actions/photo');

var origin = '';
if (process.env.RUN_ENV == 'server') {
  origin = 'http://127.0.0.1:3000';
}

module.exports = {
  user: {
    getInfo: function(username, callback){
      request
        .get(origin+'/api/users/'+username)
        .end(function(err, res){
          Actions.receiveUser(res.body);
          if (callback && typeof callback === 'function') {
            callback();
          }
        });
    },

    getPhotos: function(username, callback){
      request
        .get(origin+'/api/users/'+username+'/photos')
        .end(function(err, res){
          Actions.receivePhoto(res.body.photos);
          if (callback && typeof callback === 'function') {
            callback();
          }
        });
    }
  }
};

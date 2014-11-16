var request = require('superagent');
var Actions = require('../actions/photo');

module.exports = {
  user: {
    getInfo: function(username){
      request
        .get('/api/users/'+username)
        .end(function(err, res){
          Actions.receiveUser(res.body);
        });
    },

    getPhotos: function(username){
      request
        .get('/api/users/'+username+'/photos')
        .end(function(err, res){
          Actions.receivePhoto(res.body.photos);
        });
    }
  }
};

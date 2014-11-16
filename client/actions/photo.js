var Dispatcher = require('../dispatcher');

module.exports = {
  receivePhoto: function(photos){
    Dispatcher.handleServerAction({
      type: 'RECEIVE_PHOTO',
      photos: photos
    });
  },

  receiveUser: function(user){
    Dispatcher.handleServerAction({
      type: 'RECEIVE_USER',
      user: user
    });
  }
};

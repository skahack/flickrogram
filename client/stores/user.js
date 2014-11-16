var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _user = {};

function setUser(user) {
  _user = user;
}

var UserStore = assign(EventEmitter.prototype, {
  getUser: function(){
    return _user;
  },

  emitChange: function(){
    this.emit('CHANGE');
  },

  addChangeListener: function(callback){
    this.on('CHANGE', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('CHANGE', callback);
  }
});

UserStore.dispatchToken = Dispatcher.register(function(payload){
  var action = payload.action;

  switch (action.type) {
    case 'RECEIVE_USER':
      setUser(action.user);
      UserStore.emitChange();
      break;
  }
});

module.exports = UserStore;

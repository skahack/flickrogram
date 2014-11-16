var _ = require('underscore');
var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _photos = {};

function add(photos) {
  for (var i in photos) {
    _photos[photos[i].id] = photos[i];
  }
}

var PhotoStore = assign(EventEmitter.prototype, {
  getAll: function(){
    return _photos;
  },

  getPhotoWall: function(){
    return _.sample(_photos, 7);
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

PhotoStore.dispatchToken = Dispatcher.register(function(payload){
  var action = payload.action;

  switch (action.type) {
    case 'RECEIVE_PHOTO':
      add(action.photos);
      PhotoStore.emitChange();
      break;
  }
});

module.exports = PhotoStore;

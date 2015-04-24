require('node-jsx').install({extension: '.jsx'});
var debug = require('debug')('flickrogram:routes');
var React = require('react');
var clientApp = require('../client/components/app.jsx');
var clientAPI = require('../client/utils/api');
var Flickr = require('flickrapi');
var flickrKey = {
  api_key: '98055d6edc144da1d60ef7152836f894'
};

function findByUsername(name, callback) {
  Flickr.tokenOnly(flickrKey, function(err, flickr){
    if (err) {
      return callback(err);
    }
    flickr.urls.lookupUser({ url: genProfileUrl(name) }, function(err, result){
      if (err) {
        return callback(err);
      }
      callback(null, flickr, result);
    });
  });
}

function genProfileUrl(name) {
  return 'https://www.flickr.com/people/'+name+'/';
}

function genPhotoUrl(photo, size) {
  if (size === undefined) {
    size = 'q';
  }
  return 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_'+size+'.jpg';
}

function genAvatarUrl(user) {
  return 'http://farm'+user.iconfarm+'.staticflickr.com/'+user.iconserver+'/buddyicons/'+user.nsid+'_r.jpg';
}

function go404(err, res) {
  debug(err);
  res.status(404).send();
  return;
}

var Routes = {
  index: function(req, res){
    res.render('index.jade', { body: '' });
  },

  user: function(req, res){
    var username = req.params.user;
    clientAPI.user.getPhotos(username, function(){
      var elm = React.createElement(clientApp);
      var html = React.renderToString(elm);
      res.render('index.jade', { body: html });
      // res.send('Hello');
    });

    //async.parallel([
    //  function(next){
    //    clientAPI.user.getPhotos(username, next);
    //  },
    //  function(next){
    //    clientAPI.user.getInfo(username, next);
    //  }
    //],
    //function(err, result){
    //  var html = React.renderToString(React.createElement(clientApp));
    //  res.render('index.jade', { body: html });
    //});
  },

  userInfo: function(req, res){
    var username = req.params.user;

    findByUsername(username, function(err, flickr, result){
      if (err) return go404(err, res);
      var nsid = result.user.id;

      flickr.people.getInfo({ user_id: nsid }, function(err, result){
        if (err) return go404(err, res);

        var clean;
        clean = function(obj){
          var o = obj;
          for (var i in o) {
            if (o[i] && o[i]._content !== undefined) {
              o[i] = o[i]._content;
            } else if (typeof o[i] === "object") {
              o[i] = clean(o[i]);
            }
          }
          return o;
        };
        var person = result.person;
        person.avatar_url = genAvatarUrl(person);
        person = clean(person);

        res.json(person);
      });
    });
  },

  userPhotos: function(req, res){
    var i, retVal;
    var username = req.params.user;

    retVal = {
      user: {
        name: username,
        nsid: ''
      },
      photos: [],
    };

    findByUsername(retVal.user.name, function(err, flickr, result){
      if (err) return go404(err, res);

      var nsid = result.user.id;
      retVal.user.nsid = nsid;

      flickr.people.getPublicPhotos({
        user_id: nsid,
        page: 1
      }, function(err, result){
        if (err) return go404(err, res);

        var photos = result.photos.photo;

        for (i = 0; i < photos.length; i++) {
          var photo = photos[i];

          retVal.photos.push({
            id: photo.id,
            owner: photo.owner,
            title: photo.title,
            image_s_url: genPhotoUrl(photo, 's'),
            image_m_url: genPhotoUrl(photo, 'q'),
            image_l_url: genPhotoUrl(photo, 'm'),
            image_o_url: genPhotoUrl(photo, 'z')
          });
        }

        res.json(retVal);
      });
    });
  }
};

module.exports = Routes;

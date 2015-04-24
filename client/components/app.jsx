var React = require('react');
var UserStore = require('../stores/user');
var PhotoStore = require('../stores/photo');
var FeedHeader = require('./feed-header.jsx');
var MainSection = require('./main-section.jsx');

function getState() {
  return {
    user: UserStore.getUser(),
    photos: PhotoStore.getAll(),
    photoWall: PhotoStore.getPhotoWall()
  };
}

var App = React.createClass({
  getInitialState: function(){
    return getState();
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    PhotoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
    PhotoStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
        <FeedHeader photoWall={this.state.photoWall} />
        <MainSection user={this.state.user} photos={this.state.photos} />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getState());
  }
});

module.exports = App;

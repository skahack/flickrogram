var React = require('react');
var Photos = require('./photos.jsx');
var Profile = require('./profile.jsx');
var Main = require('./elements/main.jsx');

var MainSection = React.createClass({
  render: function(){
    return (
      <Main>
        <Profile user={this.props.user} />
        <Photos photos={this.props.photos} />
      </Main>
    );
  }
});

module.exports = MainSection;

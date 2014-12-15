var React = require('react');
var Photos = require('./photos');
var Profile = require('./profile');

var MainSection = React.createClass({
  render: function(){
    return (
      <div className="main">
        <Profile user={this.props.user} />
        <Photos photos={this.props.photos} />
      </div>
    );
  }
});

module.exports = MainSection;

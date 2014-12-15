var React = require('react');
var Photo = require('./photo');

var Photos = React.createClass({
  render: function(){
    var photos = [];

    var ps = this.props.photos;

    for (var i in ps) {
      photos.push(<Photo key={i} photo={ps[i]} />);
    }

    return (
      <ul className="l-grid photo-grid">{photos}</ul>
    );
  }
});

module.exports = Photos;

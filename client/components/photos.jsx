var React = require('react');
var Photo = require('./photo.jsx');
var Grid = require('./elements/grid.jsx');

var Photos = React.createClass({
  render: function(){
    var photos = [];

    var ps = this.props.photos;

    for (var i in ps) {
      photos.push(<Photo key={i} photo={ps[i]} />);
    }

    return (
      <Grid style={{
        boxShadow: '0 1px 1px rgba(0,0,0,.24),0 1px 5px rgba(0,0,0,.05)'
      }}>
        {photos}
      </Grid>
    );
  }
});

module.exports = Photos;

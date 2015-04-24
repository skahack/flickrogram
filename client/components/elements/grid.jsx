var React = require('react');
var assign = require('object-assign');

var Grid = React.createClass({
  getStyle: function(){
    var style = this.props.style || {};
    var base = {
      padding: 0,
      margin: 0
    };
    return assign(base, style);
  },

  getChildren: function(){
    var children = this.props.children || [];
    return children.map(function(v){
      return (
        <li
          className="l-grid-item"
          style={{
            display: 'inline',
            float: 'left',
            width: '20%'
          }}
        >
          {v}
        </li>
      );
    });

  },

  render: function(){
    return (
      <ul className="l-grid clear" style={this.getStyle()}>
        {this.getChildren()}
      </ul>
    );
  }
});

module.exports = Grid;

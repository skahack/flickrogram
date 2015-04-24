var React = require('react');
var assign = require('object-assign');

var Image = React.createClass({
  getWrapperStyle: function(){
    var skin = this.props.skin || 'avatar';
    var style = this.props.style || {};
    var base = assign(style, {
      display: 'inline-block',
      border: '5px solid #fff',
      boxShadow: '0 0 0 1px rgba(0,0,0,.04), 0 1px 5px rgba(0,0,0,.1)',
      borderRadius: 4
    });
    if (skin === 'avatar') {
      return assign(base, {
        width: 110,
        height: 110
      });
    } else if (skin === 'thumb') {
      return assign(base, {
        width: 160,
        height: 160
      });
    }
  },

  getImageStyle: function(){
    var skin = this.props.skin || 'avatar';
    if (skin === 'avatar') {
      return {
        width: 110,
        height: 110
      };
    } else if (skin === 'thumb') {
      return {
        width: 160,
        height: 160
      };
    }
  },

  render: function(){
    return (
      <div
        className="m-image"
        style={this.getWrapperStyle()}
      >
        <img
          className="m-image-img"
          style={this.getImageStyle()}
          src={this.props.imageUri}
        />
      </div>
    );
  }
});

module.exports = Image;

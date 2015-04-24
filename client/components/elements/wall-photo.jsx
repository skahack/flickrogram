var React = require('react');
var assign = require('object-assign');

var WallPhoto = React.createClass({
  getWrapperStyle: function(){
    var num = this.props.num || 0;
    var base = {
      position: 'absolute',
      width: '20%',
      height: '50%'
    };

    if (num === '0') {
      return assign(base, {
        left: 0,
        top: 0,
        borderRadius: '4px 0 0 0'
      });
    } else if (num === '1') {
      return assign(base, {
        left: 0,
        bottom: 0
      });
    } else if (num === '2') {
      return assign(base, {
        width: '40%',
        height: '100%',
        left: '20%',
        top: 0
      });
    } else if (num === '3') {
      return assign(base, {
        left: '60%',
        top: 0
      });
    } else if (num === '4') {
      return assign(base, {
        left: '60%',
        bottom: 0
      });
    } else if (num === '5') {
      return assign(base, {
        left: '80%',
        top: 0,
        borderRadius: '0 4px 0 0'
      });
    } else if (num === '6') {
      return assign(base, {
        left: '80%',
        bottom: 0
      });
    }

    return base;
  },

  getImageStyle: function(){
    var num = this.props.num || 0;
    var base = {
      position: 'absolute',
      maxWidth: '100%',
      maxHeight: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto'
    };
    if (num === '0') {
      return assign(base, {
        borderRadius: '4px 0 0 0'
      });
    } else if (num === '5') {
      return assign(base, {
        borderRadius: '0 4px 0 0'
      });
    }
    return base;
  },

  getShadowStyle: function(){
    var num = this.props.num || 0;
    var base = {
      border: '1px solid rgba(255,255,255,.15)',
      display: 'block',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    };
    if (num === '0') {
      return assign(base, {
        borderRadius: '4px 0 0 0'
      });
    } else if (num === '5') {
      return assign(base, {
        borderRadius: '0 4px 0 0'
      });
    }
    return base;
  },

  render: function(){
    return (
      <div style={this.getWrapperStyle()}>
        <img
          className="photo-wall-photo-img"
          style={this.getImageStyle()}
          src={this.props.imageUri}
        />
        <div
          className="photo-wall-photo-shadow"
          style={this.getShadowStyle()}
        />
      </div>
    );
  }
});

module.exports = WallPhoto;

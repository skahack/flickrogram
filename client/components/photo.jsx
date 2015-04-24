var React = require('react');
var Image = require('./elements/image.jsx');

var Photo = React.createClass({
  render: function(){
    return (
      <div
        className="thumb-wrapper"
        style={{
          margin: '0 auto',
          width: 170,
          paddingTop: 30
        }}
      >
        <Image
          skin="thumb"
          imageUri={this.props.photo.image_m_url}
        />
      </div>
    );
  }
});

module.exports = Photo;

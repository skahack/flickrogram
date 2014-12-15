var React = require('react');

var Photo = React.createClass({
  render: function(){
    return (
      <li className="l-grid-item">
        <div className="thumb-wrapper">
          <span className="m-image is-thumb">
            <img className="m-image-img" src={this.props.photo.image_m_url} />
          </span>
        </div>
      </li>
    );
  }
});

module.exports = Photo;

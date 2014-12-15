var React = require('react');

var Profile = React.createClass({
  render: function(){
    var count = 0;
    if (this.props.user.photos && this.props.user.photos.count) {
      count = this.props.user.photos.count;
    }

    return (
      <div className="profile clear">
        <div className="profile-section m-image is-avatar">
          <img className="m-image-img" src={this.props.user.avatar_url} />
        </div>
        <div className="profile-section profile-bio">
          <h1>{this.props.user.username}</h1>
          <p>
            <strong>{this.props.user.realname}</strong>
            <span dangerouslySetInnerHTML={{__html: this.props.user.description}}></span>
          </p>
        </div>
        <div className="profile-section profile-stats">
          <div className="profile-stats-num">{count}</div>
          <div>posts</div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;

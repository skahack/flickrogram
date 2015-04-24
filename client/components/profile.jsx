var React = require('react');
var Image = require('./elements/image.jsx');

var Profile = React.createClass({
  description: function(){
    var desc = this.props.user.description || '';
    return {__html: desc};
  },

  render: function(){
    var count = 0;
    if (this.props.user.photos && this.props.user.photos.count) {
      count = this.props.user.photos.count;
    }

    return (
      <div
        className="profile clear"
        style={{
          position: 'relative',
          height: 100,
          background: '#fcfcfc',
          padding: '10px 30px 15px',
          borderBottom: '1px solid #d9d9d9',
          boxShadow: '1px 0 0 rgba(0,0,0,.05),-1px 0 0 rgba(0,0,0,.05),0 1px 2px rgba(0,0,0,.05)'
        }}
      >
        <Image
          className="profile-section"
          skin="avatar"
          imageUri={this.props.user.avatar_url}
          style={{
            float: 'left',
            position: 'absolute',
            bottom: 30
          }}
        />
        <div
          className="profile-section profile-bio"
          style={{
            float: 'left',
            width: 550,
            marginLeft: 150
          }}
        >
          <h1 style={{
            fontSize: '23px',
            lineHeight: '30px',
            margin: 0
          }}>
            {this.props.user.username}
          </h1>
          <p style={{
            textOverflow: 'ellipsis',
            wordBreak: 'break-word',
            color: '#666',
            margin: 0,
            maxHeight: 60,
            overflow: 'hidden'
          }}>
            <strong style={{
              marginRight: 5
            }}>
              {this.props.user.realname}
            </strong>
            <span dangerouslySetInnerHTML={this.description()}/>
          </p>
        </div>
        <div
          className="profile-section profile-stats"
          style={{
            float: 'left',
            color: '#999',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: '15px',
            textShadow: '0 1px 0 rgba(255,255,255,.8)',
            background: '#f5f5f5',
            border: '1px solid #ccc',
            padding: '7px 10px',
            borderRadius: '4px',
            boxShadow: '0 1px 1px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.8)',
            position: 'absolute',
            right: 55,
            bottom: 30
          }}
        >
          <div
            className="profile-stats-num"
            style={{
              color: '#333',
              fontSize: 16
            }}
          >
            {count}
          </div>
          <div>posts</div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;

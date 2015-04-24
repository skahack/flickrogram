var React = require('react');
var Main = require('./elements/main.jsx');
var WallPhoto = require('./elements/wall-photo.jsx');

var FeedHeader = React.createClass({
  render: function(){
    var photos = [];
    var p = this.props.photoWall;
    for (var i in p) {
      var url = p[i].image_l_url;
      if (i === '2') {
        url = p[i].image_o_url;
      }
      var w = <WallPhoto num={i} imageUri={url} />;

      photos.push(w);
    }

    return (
      <div
        className="feed-header"
        style={{
          height: 440,
          background: '#222',
          overflow: 'hidden'
        }}
      >
        <Main background="#222">
          <div
            className="photo-wall"
            style={{
              position: 'relative',
              borderRadius: '4px 4px 0 0',
              height: 410,
              marginTop: 30,
              background: '#000'
            }}
          >
            {photos}
          </div>
        </Main>
      </div>
    );
  }
});

module.exports = FeedHeader;

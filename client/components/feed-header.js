var React = require('react');

var FeedHeader = React.createClass({
  render: function(){
    var photos = [];
    var p = this.props.photoWall;
    for (var i in p) {
      var cname = "photo-wall-photo is-" + i;
      var url = p[i].image_l_url;
      if (i === '2') {
        url = p[i].image_o_url;
      }
      var w =
        <div className={cname}>
          <img className="photo-wall-photo-img" src={url} />
          <div className="photo-wall-photo-shadow"></div>
        </div>
      photos.push(w);
    }

    return (
      <div className="feed-header">
        <div className="main">
          <div className="photo-wall">
            {photos}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeedHeader;

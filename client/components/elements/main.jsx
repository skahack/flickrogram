var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div
        className="main"
        style={{
          position: 'relative',
          margin: '0 auto',
          width: 1025,
          background: this.props.background ? this.props.background : '#eaeaea'
        }}
      >
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;

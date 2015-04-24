var page = require('page');
var React = require('react');
var App = require('./components/app.jsx');
var API = require('./utils/api');

var Home = React.createClass({
  render: function(){
    var users = [
      { url: '/evanatwood', name: 'Evan J Atwood' },
      { url: '/alexandra-roseliza', name: 'Alex Benetel' },
      { url: '/olivercharles', name: 'Oliver Charles' },
      { url: '/lissyl', name: 'Lissy Elle Laricchia' },
      { url: '/greg-pths', name: 'Greg Ponthus' },
      { url: '/silviabmx', name: 'Silvia Grav' }
    ];
    var links = [];
    for (var i in users) {
      links.push(
        <li>
          <a href={users[i].url}>{users[i].name}</a>
        </li>
      );
    }
    return (
      <ul>{links}</ul>
    );
  }
});

page('/', function(){
  React.render(
    <Home />,
    document.getElementById('root')
  );
});
page('/:user', function(ctx){
  var username = ctx.params.user;
  API.user.getPhotos(username);
  API.user.getInfo(username);

  React.render(
    <App />,
    document.getElementById('root')
  );
});
page();

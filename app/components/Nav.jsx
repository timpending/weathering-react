var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
    onSearch: function (e) {
      e.preventDefault();
      alert('not yet connected')
    },
    render: function () {
      return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Weathering React</li>
              <li>
                <IndexLink to='/' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>Weather</IndexLink>
              </li>
              <li>
                <Link to='/about' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to='/examples' activeClassName='active' activeStyle={{color: 'green', fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li><input type="search" placeholder="Search Weather by City"/></li>
                <li><input type="submit" className="button" value="GetWeather"/></li>
              </ul>
            </form>
          </div>
        </div>
      );
    }
  })

module.exports = Nav;

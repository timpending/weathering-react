const React = require('react');

var About = (props) => {
  return (
    <div>
      <div>
        <h3 className="page-title text-center">About</h3>
        <p>This is a weather app built on React.  I've been building this using a Udemy course</p>
        <p>Here are some of the tools I've used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React Page</a> JS Framework used to create this project.
          </li>
          <li>
            <a href="http://openWeatherMap.org">OpenWeatherMap.org</a>  API used to obtain weather information.
          </li>
        </ul>
      </div>
    </div>
  )
};


module.exports = About;

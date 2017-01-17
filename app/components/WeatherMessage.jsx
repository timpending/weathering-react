const React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p>It is currently {temp} F in {location}.</p>
  )
}

module.exports = WeatherMessage;

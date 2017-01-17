const React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h5 className="text-center">It is currently {temp} F in {location}.</h5>
  )
}

module.exports = WeatherMessage;

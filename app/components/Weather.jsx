const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  handleSearch(location){
    const that = this;

    this.setState({isLoading:true});
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      that.setState({isLoading:false});
      alert(errorMessage);
    });
  },
  render () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading){
        return <h3>Gathering Weather Data...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1>Weather Here</h1>
        <p>Get your weather here!</p>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});


module.exports = Weather;

const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');


const Weather = React.createClass({
  getInitialState(){
    return {
      isLoading: false,
    }
  },
  handleSearch(location){
    const that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        isLoading: true,
        location: location,
        temp: temp
      });
    }, function(e) {
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });
  },

  render () {
    var {isLoading, temp, location, errorMessage} = this.state;

     function renderMessage () {
      if (isLoading){
        return <h3 className="text-center">Gathering Weather Data...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if (typeof(errorMessage) === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Weather Here</h1>
        <h6 className="text-center page-subtitle">Search For A City - Obtain Its Temperature</h6>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});


module.exports = Weather;

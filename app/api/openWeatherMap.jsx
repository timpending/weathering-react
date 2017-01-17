const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=e5caf02cd0ed6c9d4cae97935efeb63e'


module.exports = {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location)
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=?${encodedLocation}`;

    return axios.get(requestURL)
      .then(function(response) {
        if (!response.data.cod && !response.data.message || response.data.list.length === 0 ){
          throw new Error ('Unable to fetch weather for that location.');
        } else {
          return response.data.list[0].main.temp
        }
      }).catch(function(error) {
        throw new Error ('Unable to fetch weather for that location.');
      });
  }
};

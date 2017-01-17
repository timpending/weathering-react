const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();
    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input placeholder="Type a city in here." type="text" ref="location" />
        </div>
        <div>
            <button className="button expanded hollow">Fetch That Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;

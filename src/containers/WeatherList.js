import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather(weatherArray) {
    if (weatherArray.length > 0) {
      return weatherArray.map(cityData => {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
          <tr key={name}>
            <td>
              <GoogleMap lon={lon} lat={lat} />
            </td>
            <td>
              <Chart data={temps} color="orange" units="K" />
            </td>
            <td>
              <Chart data={pressures} color="green" units="hPa" />
            </td>
            <td>
              <Chart data={humidities} color="black" units="%" />
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.renderWeather(this.props.weather)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);

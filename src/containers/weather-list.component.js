import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/charts.component';
import GoogleMap from './../components/maps.component';


class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord;
        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart color={'blue'} data={temps} units={'F'} /></td>
                <td><Chart color={'green'} data={pressures} units={'hPa'} /></td>
                <td><Chart color={'purple'} data={humidities} units={'%'}/></td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps({weather}) {
    return {weather};
}
export default connect(mapStateToProps)(WeatherList)
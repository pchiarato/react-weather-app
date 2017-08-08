import axios from 'axios';
import { WEATHER_API_KEY } from './../config/config'


// const API_KEY = "ddd1d54b7122ff6ca4dbae6b606df1ba";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us&units=imperial`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
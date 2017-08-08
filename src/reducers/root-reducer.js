import { combineReducers } from 'redux';
import WeatherReducer from './weather.reducer';

const reducers = combineReducers({
    weather: WeatherReducer
})

export default reducers;
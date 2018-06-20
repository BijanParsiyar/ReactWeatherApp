import { combineReducers } from "redux";

import weatherReducer from "./reducer_weather";
import errorReducer from "./reducer_errors";

export default combineReducers({
  weather: weatherReducer,
  errors: errorReducer
});

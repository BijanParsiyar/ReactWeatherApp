import axios from "axios";
import { FETCH_WEATHER, GET_ERRORS, CLEAR_ERRORS } from "./types";

const API_KEY = "8da496ef8e66dd2351a33062d4cc16fd";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = city => dispatch => {
  const url = `${ROOT_URL}&q=${city},us`;
  dispatch(clearErrors());
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

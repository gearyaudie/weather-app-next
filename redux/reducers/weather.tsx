import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_ICON,
} from "../types/weather";

interface State {
  loading?: boolean;
  weather?: any;
  icon?: any;
  error?: "";
}

const initialState: State = {
  loading: false,
  weather: [],
  icon: "",
  error: "",
};

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
        icon: action.payload2,
        error: "",
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ICON:
      return {
        icon: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;

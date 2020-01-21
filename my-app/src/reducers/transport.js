import { SET_CARS, GET_CARS_SUCCESS } from "../actions/CarsActions";

const initialState = {
  cars: 25000,
  busses: 4000,
  isFetching: false
};

export function transportReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARS:
      return { ...state, cars: state.cars, isFetching: true };

    case GET_CARS_SUCCESS:
      return { ...state, cars: state.cars + 1, isFetching: false };

    default:
      return state;
  }
}

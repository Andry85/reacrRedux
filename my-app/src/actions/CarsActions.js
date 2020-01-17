export const SET_CARS = "SET_CARS";
export const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";

export function setCars(cars) {
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: SET_CARS,
      payload: cars
    });

    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      });
    }, 3000);
  };
}

export const SET_CARS = "SET_CARS";
export const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";

export function setCars() {
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: SET_CARS
    });

    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_CARS_SUCCESS
      });
    }, 3000);
  };
}

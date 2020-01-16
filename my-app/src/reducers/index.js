import { combineReducers } from "redux";

import { peopleReducer } from "./population";
import { transportReducer } from "./transport";

export const rootReducer = combineReducers({
  people: peopleReducer,
  transport: transportReducer
});

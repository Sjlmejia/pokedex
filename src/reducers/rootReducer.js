import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiSlice from "../slices/uiSlice";

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiSlice,
});
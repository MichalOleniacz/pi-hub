import { combineReducers } from "redux";
import generalInfoReducer from "./slices/generalInfo";
import usageInfoReducer from "./slices/usageInfo";

export default combineReducers({
  generalInfo: generalInfoReducer,
  usageInfo: usageInfoReducer,
});

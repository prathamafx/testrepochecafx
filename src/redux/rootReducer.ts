import { combineReducers, Reducer } from "redux";
import appReducer from "./Loader/loader.reducer";

const rootReducer = combineReducers({
  appReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export type LoaderReducerType = ReturnType<typeof appReducer>;

export default rootReducer;
import { combineReducers } from "redux";
import bookStoreReducer from "./bookStore/bookStoreReducer";
import filterReducer from "./filter/filterReducer";
const rootReducer = combineReducers({
  store: bookStoreReducer,
  filter: filterReducer,
});

export default rootReducer;

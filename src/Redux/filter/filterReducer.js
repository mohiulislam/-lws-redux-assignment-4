import { FILTER, SEARCH } from "./actionTypes";
import { initialState } from "./initialState";

function filterReducer(state = initialState, action) {
  switch (action.payload) {
    case SEARCH: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case FILTER: {
      return {
        ...state,
        filterQuery: action.payload,
      };
    }
    default:
      return state;
  }
}
export default filterReducer;

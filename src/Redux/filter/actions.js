import { SEARCH, FILTER } from "./actionTypes";

export function search(keyword) {
  return {
    type: SEARCH,
    payload: keyword,
  };
}
export function filter(keyword) {
  return {
    type: FILTER,
    payload: keyword,
  };
}

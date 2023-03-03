import { ADD, UPDATE, LOAD, DELETE } from "./actionTypes";
export function loadBook(book) {
  return {
    type: LOAD,
    payload: book,
  };
}

export function addBook(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function upDateBook(id, updatedBook) {
  return {
    type: UPDATE,
    payload: { id, updatedBook },
  };
}
export function deleteBook(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

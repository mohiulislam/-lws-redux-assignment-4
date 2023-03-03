import { loadBook } from "../actions";
export async function fetchBook(dispatch, getStore) {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  dispatch(loadBook(books));
}
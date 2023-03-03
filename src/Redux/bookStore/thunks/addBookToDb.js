import { addBook as addBookAction } from "../actions";
function addBook(book) {
  return async function (dispatch) {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const books = await response.json();
    dispatch(addBookAction(books));
  };
}

export default addBook;

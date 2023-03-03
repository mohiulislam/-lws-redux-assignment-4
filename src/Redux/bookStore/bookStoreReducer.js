import { initialState } from "./initialState";
import { ADD, UPDATE, LOAD, DELETE } from "../bookStore/actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

function bookStoreReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        books: action.payload,
      };

    case ADD:
      return {
        ...state,
        books: [
          ...state.books,
          {
            ...action.payload,
            id: nextBookId(state.books),
          },
        ],
      };

    case UPDATE:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload.book;
          } else {
            return book;
          }
        }),
      };
    case DELETE:
      return {
        ...state,
        books: state.books.filter((book) =>
          book.id !== action.payload ? true : false
        ),
      };
    default:
      return state;
  }
}
export default bookStoreReducer;

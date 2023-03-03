import { deleteBook as deleteBookAction } from "../actions";
function deleteBook(id) {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });

    dispatch(deleteBookAction(id));
  };
}

export default deleteBook;

import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../component/BookCard";
import Nav from "../Layouts/Nav";
import addBook from "../Redux/bookStore/thunks/addBookToDb";
import { fetchBook } from "../Redux/bookStore/thunks/fetchBook";
import { filter } from "../Redux/filter/actions";

function Home() {
  const filterQuery = useSelector((state) => state.filter.filterQuery);
  const books = useSelector((state) => state.store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: null,
    rating: null,
    featured: false,
  });

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rating" || name === "price"
          ? +value
          : value,
    }));
  }

  function handleFilter(keyword) {
    dispatch(filter(keyword));
    console.log(keyword);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addBook(formData));
  }

  return (
    <Fragment>
      <Nav />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {books.length > 0 ? (
            <div className="order-2 xl:-order-1">
              <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleFilter("all")}
                    className={`filter-btn ${
                      filterQuery === "all" ? "active-filter" : ""
                    }`}
                    id="lws-filterAll"
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleFilter("featured")}
                    className={`filter-btn ${
                      filterQuery === "featured" ? "active-filter" : ""
                    }`}
                    id="lws-filterFeatured"
                  >
                    Featured
                  </button>
                </div>
              </div>
              <div className="lws-bookContainer">
                {books.map((book, index) => (
                  <BookCard key={index} book={book} />
                ))}
              </div>
            </div>
          ) : null}
          <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
              <h4 className="mb-8 text-xl font-bold text-center">
                Add New Book
              </h4>
              <form className="book-form">
                <div className="space-y-2">
                  <label htmlFor="input-Bookname">Book Name</label>
                  <input
                    onChange={handleInputChange}
                    required
                    className="text-input"
                    type="text"
                    id="input-Bookname"
                    name="name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="input-Bookauthor">Author</label>
                  <input
                    onChange={handleInputChange}
                    required
                    className="text-input"
                    type="text"
                    id="input-Bookauthor"
                    name="author"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="input-Bookthumbnail">Image Url</label>
                  <input
                    onChange={handleInputChange}
                    required
                    className="text-input"
                    type="text"
                    id="input-Bookthumbnail"
                    name="thumbnail"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                    <label htmlFor="input-Bookprice">Price</label>
                    <input
                      onChange={handleInputChange}
                      required
                      className="text-input"
                      type="number"
                      id="input-Bookprice"
                      name="price"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="input-Bookrating">Rating</label>
                    <input
                      onChange={handleInputChange}
                      required
                      className="text-input"
                      type="number"
                      id="input-Bookrating"
                      name="rating"
                      min="1"
                      max="5"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    onChange={handleInputChange}
                    id="input-Bookfeatured"
                    type="checkbox"
                    name="featured"
                    className="w-4 h-4"
                  />
                  <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
                    This is a featured book
                  </label>
                </div>

                <button
                  onClick={(event) => handleSubmit(event)}
                  type="submit"
                  className="submit"
                  id="submit"
                >
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;

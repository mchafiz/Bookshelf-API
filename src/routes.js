const {
  getBookByIdHandler,
  addNewBook,
  getAllBooksHandler,
  editBookByIdHandler,
  deleteBookIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addNewBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  { method: "PUT", path: "/books/{id}", handler: editBookByIdHandler },
  { method: "DELETE", path: "/books/{id}", handler: deleteBookIdHandler },
];

module.exports = routes;

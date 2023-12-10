const {
  controllerAddBook,
  controllerGetAllBooks,
  controllerGetBookById,
  controllerEditBookById,
  controllerDeleteBookById,
} = require('./controller');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: controllerAddBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: controllerGetAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: controllerGetBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: controllerEditBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: controllerDeleteBookById,
  },
];
module.exports = routes;

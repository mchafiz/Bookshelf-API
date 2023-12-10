Bookshelf API
Description
This repository contains the source code for a simple bookshelf API. It provides endpoints for managing books, including adding, retrieving, updating, and deleting book information.

Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Usage
To start the server, use the following command:

bash
Copy code
npm start
For development with auto-restart on file changes, use:

bash
Copy code
npm run start-dev
API Endpoints
1. Add a new book
Endpoint: POST /books
Handler: addNewBook
2. Get all books
Endpoint: GET /books
Handler: getAllBooksHandler
3. Get a book by ID
Endpoint: GET /books/{id}
Handler: getBookByIdHandler
4. Edit a book by ID
Endpoint: PUT /books/{id}
Handler: editBookByIdHandler
5. Delete a book by ID
Endpoint: DELETE /books/{id}
Handler: deleteBookIdHandler
Scripts
Linting: To lint the source code, run:

bash
Copy code
npm run lint
Dependencies
@hapi/hapi: Version ^21.3.2
nanoid: Version ^3.3.7
Dev Dependencies
eslint: Version ^8.55.0
eslint-config-airbnb-base: Version ^15.0.0
eslint-plugin-import: Version ^2.29.0
nodemon: Version ^3.0.2
License
This project is licensed under the ISC License - see the LICENSE.md file for details.

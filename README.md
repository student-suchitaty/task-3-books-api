# Task 3 – REST API for Books (Node.js & Express)

A simple REST API with CRUD operations for managing books, built with Node.js and Express for the Web Development Internship (Elevate Labs). Data is stored in memory (no database), so it resets when the server restarts.

## Endpoints
| Method | Endpoint | Description | Success code |
|--------|----------|-------------|--------------|
| GET | `/books` | Get all books | 200 |
| GET | `/books/:id` | Get one book | 200 |
| POST | `/books` | Add a new book | 201 |
| PUT | `/books/:id` | Update a book | 200 |
| DELETE | `/books/:id` | Delete a book | 200 |

Errors return 400 (bad input) or 404 (book not found) with a JSON message.

## Example request body (POST / PUT)
```json
{ "title": "Deep Work", "author": "Cal Newport" }
```

## Concepts used
- REST API design and HTTP methods
- Express routing and `req` / `res` objects
- Middleware (`express.json()`, 404 handler, error handler)
- JSON handling and HTTP status codes

## Tools
Node.js, Express, VS Code, Postman

## How to run
```bash
npm install
npm start
```
The server runs at `http://localhost:3000`.

## Screenshots (tested with Postman)

**GET all books (200)**
![GET](screenshots/get-all-books.PNG)

**POST add a book (201)**
![POST](screenshots/POST.PNG)

**PUT update a book (200)**
![PUT](screenshots/PUT.PNG)

**DELETE remove a book (200)**
![DELETE](screenshots/DELETE.PNG)

**GET unknown book (404)**
![404](screenshots/not-found.PNG)

**Final state after all operations**
![Final](screenshots/final-state.PNG)

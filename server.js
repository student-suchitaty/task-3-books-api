const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: parse JSON request bodies
app.use(express.json());

// In-memory storage (no database)
let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];
let nextId = 3;

// Home route
app.get('/', (req, res) => {
  res.send('Books API is running. Use /books');
});

// GET /books - return all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET /books/:id - return one book
app.get('/books/:id', (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - update a book
app.put('/books/:id', (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const { title, author } = req.body;
  if (!title && !author) {
    return res.status(400).json({ error: 'Provide title or author to update' });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.status(200).json(book);
});

// DELETE /books/:id - remove a book
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const deleted = books.splice(index, 1)[0];
  res.status(200).json({ message: 'Book deleted', book: deleted });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
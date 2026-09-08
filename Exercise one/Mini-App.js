const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// In-memory books
let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' }
];

// 1. GET - Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// 2. GET - Get one book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) {
    return res.status(404).send('Book not found');
  }

  res.json(book);
});

// 3. POST - Add a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// 4. PUT - Update book title
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) {
    return res.status(404).send('Book not found');
  }

  book.title = req.body.title;

  res.json(book);
});

// 5. DELETE - Delete a book
app.delete('/books/:id', (req, res) => {
  const bookExists = books.some(b => b.id == req.params.id);

  if (!bookExists) {
    return res.status(404).send('Book not found');
  }

  books = books.filter(b => b.id != req.params.id);

  res.send('Book deleted successfully');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
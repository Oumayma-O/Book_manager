const express = require('express');
const bodyParser = require('body-parser');
const { Book } = require('src/book');
const {
    addBook,
    showUnreadBooks,
    showReadBooks,
    removeBook,
    markBookRead,
} = require('src/book.service');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const initialBooks = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180),
    new Book("To Kill a Mockingbird", "Harper Lee", 281),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 320)
];

app.get('/books', (req, res) => {
    res.json(initialBooks);
});

app.post('/books', (req, res) => {
    const { title, author, pages } = req.body;
    const newBook = new Book(title, author, pages);
    addBook(initialBooks, newBook);
    res.status(201).json(newBook);
});

app.put('/books/:index/read', (req, res) => {
    const index = parseInt(req.params.index);
    try {
        markBookRead(initialBooks, index);
        res.json({ message: 'Book marked as read' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    try {
        removeBook(initialBooks, index);
        res.json({ message: 'Book removed successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${3200}`);
});

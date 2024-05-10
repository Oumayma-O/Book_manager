class Book {
    constructor(title, author, pages) {
        if (!title || !author || !pages) {
            throw new Error("Title, author, and pages are required.");
        }
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    markRead() {
        this.read = true;
    }
}

module.exports = Book;

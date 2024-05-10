class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.booksRead = [];
    }

    addBookRead(book) {
        this.booksRead.push(book);
    }

    getBooksRead() {
        return this.booksRead;
    }
}

module.exports = User;


function addBook(list, book, user = null) {
    list.push({ book, user });
}

function showUnreadBooks(list) {
    return list.filter((item) => !item.read);
}

function showReadBooks(list) {
    return list.filter((item) => item.read);
}

function removeBook(list, index) {
    if (list.length === 0) {
        throw new Error("The list is empty, cannot remove an element.");
    }
    if (index < 0 || index >= list.length) {
        throw new Error("Index is out of bounds, cannot remove an element.");
    }
    list.splice(index, 1);
}

function markBookRead(list, index) {
    if (index < 0 || index >= list.length) {
        throw new Error("Index is out of bounds, cannot mark the book as read.");
    }
    list[index].markRead(); // Utilizing markRead method of the Book class
}

function associateBookWithUser(list, bookIndex, user) {
    if (bookIndex < 0 || bookIndex >= list.length) {
        throw new Error("Index is out of bounds, cannot associate the book with the user.");
    }
    list[bookIndex].user = user;
}

function getUserBooks(list, user) {
    return list.filter((item) => item.user === user).map((item) => item.book);
}

module.exports = {
    addBook,
    showUnreadBooks,
    showReadBooks,
    removeBook,
    markBookRead,
    associateBookWithUser,
    getUserBooks,
};

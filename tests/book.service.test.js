import { test, expect } from "vitest";
import Book from "../src/book";
import functions from "../src/book.service";


test("Test removing a book from a list", () => {
  const bookList = [
    new Book("Book 1", "Author 1", 200),
    new Book("Book 2", "Author 2", 250),
    new Book("Book 3", "Author 3", 300),
  ];
  functions.removeBook(bookList, 1);
  expect(bookList.length).toBe(2);
  expect(bookList[0].title).toBe("Book 1");
  expect(bookList[1].title).toBe("Book 3");

  const emptyList = [];
  expect(() => functions.removeBook(emptyList, 0)).toThrowError(
      "The list is empty, cannot remove an element."
  );

  expect(() => functions.removeBook(bookList, 7)).toThrowError(
      "Index is out of bounds, cannot remove an element."
  );
});

test("test marking a book as read", () => {
  const bookList = [
    new Book("Book 1", "Author 1", 200),
    new Book("Book 2", "Author 2", 250),
    new Book("Book 3", "Author 3", 300),
  ];
  functions.markBookRead(bookList, 1);
  expect(bookList[1].read).toBeTruthy();

  expect(() => functions.markBookRead(bookList, 7)).toThrowError(
      "Index is out of bounds, cannot mark the book as read."
  );
});

test("test showing read books", () => {
  const bookList = [
    new Book("Book 1", "Author 1", 200),
    new Book("Book 2", "Author 2", 250),
    new Book("Book 3", "Author 3", 300),
    new Book("Book 4", "Author 4", 350),
  ];
  bookList[0].markRead();
  bookList[2].markRead();
  const readBooks = functions.showReadBooks(bookList);
  expect(readBooks.length).toBe(2);
  expect(readBooks[0].title).toBe("Book 1");
  expect(readBooks[1].title).toBe("Book 3");
});

test("test showing unread books", () => {
  const bookList = [
    new Book("Book 1", "Author 1", 200),
    new Book("Book 2", "Author 2", 250),
    new Book("Book 3", "Author 3", 300),
    new Book("Book 4", "Author 4", 350),
  ];
  bookList[0].markRead();
  bookList[2].markRead();
  const unreadBooks = functions.showUnreadBooks(bookList);

  expect(unreadBooks.length).toBe(2);
  expect(unreadBooks[0].title).toBe("Book 2");
  expect(unreadBooks[1].title).toBe("Book 4");
});

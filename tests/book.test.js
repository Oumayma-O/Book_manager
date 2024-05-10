import { test, expect } from "vitest";
import Book from "../src/book";

test("test constructor", () => {
  const correctBook = new Book(
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      180
  );
  expect(correctBook.title).toBe("The Great Gatsby");
  expect(correctBook.author).toBe("F. Scott Fitzgerald");
  expect(correctBook.pages).toBe(180);
  expect(correctBook.read).toBeFalsy();

  const bookMissingArgs = () => new Book("Title", "Author");
  expect(bookMissingArgs).toThrowError(
      new Error("Title, author, and pages are required.")
  );

  const emptyBook = () => new Book();
  expect(emptyBook).toThrowError(
      new Error("Title, author, and pages are required.")
  );

  correctBook.markRead();
  expect(correctBook.read).toBeTruthy();
});

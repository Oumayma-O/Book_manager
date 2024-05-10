import { test, expect } from "vitest";
import User from "../src/user";

test("Test User class methods", () => {
    const user = new User("John Doe", "john@example.com");

    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john@example.com");
    expect(user.booksRead.length).toBe(0);

    // Mock book objects
    const book1 = { title: "Book 1", author: "Author 1", pages: 200 };
    const book2 = { title: "Book 2", author: "Author 2", pages: 250 };

    user.addBookRead(book1);
    user.addBookRead(book2);

    expect(user.booksRead.length).toBe(2);
    expect(user.getBooksRead()).toEqual([book1, book2]);
});

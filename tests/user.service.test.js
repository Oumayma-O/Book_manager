import { test, expect } from "vitest";
import {addUser, getUser , users} from "../src/user.service";

test("Test addUser function", () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    addUser(newUser);
    expect(Object.keys(users).length).toBe(1);
    expect(users[newUser.email]).toEqual(newUser);

    expect(() => addUser(newUser)).toThrowError("User already exists.");
});

test("Test getUser function", () => {
    const existingUser = { name: "Jane Doe", email: "jane@example.com" };
    users[existingUser.email] = existingUser;
    const retrievedUser = getUser(existingUser.email);
    expect(retrievedUser).toEqual(existingUser);

    const nonExistentEmail = "nonexistent@example.com";
    expect(() => getUser(nonExistentEmail)).toThrowError("User not found.");
});

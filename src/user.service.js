const users = {};

function addUser(user) {
    if (users[user.email]) {
        throw new Error("User already exists.");
    }
    users[user.email] = user;
}

function getUser(email) {
    const user = users[email];
    if (!user) {
        throw new Error("User not found.");
    }
    return user;
}

module.exports = {
    users,
    addUser,
    getUser,
};

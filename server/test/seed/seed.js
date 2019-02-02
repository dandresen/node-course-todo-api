const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/users');

const userOneId = new ObjectID;
const userTwoId = new ObjectID;
const users = [{
    _id: userOneId,
    email: 'david@example.com',
    password: 'user1pass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'angie@example.com',
    password: 'user2pass',
}];

const todos = [{
    _id: new ObjectID(),
    text: 'first test todo',
}, {
    _id: new ObjectID(),
    text: 'second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then (() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};

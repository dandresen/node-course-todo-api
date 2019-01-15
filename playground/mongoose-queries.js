const{ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// var id = '5c3d48e8fe835f214cea6d65';

// if (!ObjectId.isValid(id)) {
//     console.log('Id not valid!');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Not a valid Id.')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


var userId = '5c387a1b495169174e782f49';

if (!ObjectId.isValid(userId)) {
    console.log('User Id not Valid!');
}

Users.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found.');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));
const{ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} =  require('../server/models/todo');
const {Users} = require('../server/models/users');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5c41381ac754cc858c8ea1e0').then((todo) => {
    console.log(todo);
});
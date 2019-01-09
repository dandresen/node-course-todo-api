// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },  (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb sever.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Some MORE text here.",
    //     result: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert collection.', err);
    //     }
    //     console.log('Added the following collection(s):');
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // }); 

    //     db.collection('Users').insertOne({
    //     name: "David",
    //     age: 31,
    //     location: "Austin"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert collection.', err);
    //     }
    //     // console.log('Added the following collection(s):');
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // }); 


    client.close();
});
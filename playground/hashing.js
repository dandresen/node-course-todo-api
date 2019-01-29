const {SHA256} =  require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);




// BELOW WAS JUST FOR UNDERSTANDING OF HOW HASHING WORKS
// const {SHA256} =  require('crypto-js');
// var message = 'I am user 3'

// var hash = SHA256(message).toString();

// console.log(message);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // // case where user tries and gets new token id hash
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Trust Data');
// } else {
//     console.log('Data was changed, do not trust.');
// };
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp' || 'mongodb://localhost:27017/TodoAppTest' , {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};
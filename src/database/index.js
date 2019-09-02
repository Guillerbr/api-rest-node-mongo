const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:kUqmUQs4xjU0XXNp@cluster0-sx3wg.gcp.mongodb.net/test?retryWrites=true&w=majority', { useMongoCliente: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
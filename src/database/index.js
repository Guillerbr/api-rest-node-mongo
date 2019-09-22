const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:G3jvzXdO7TxEl5HI@cluster0-sx3wg.gcp.mongodb.net/Payment?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;
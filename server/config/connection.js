const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
ls8UPlEzKsmJWG7V
mongodb+srv://papabear23:ls8UPlEzKsmJWG7V@cluster0.fwjg4ox.mongodb.net/
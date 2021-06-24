const { MongoMemoryServer } = require('mongodb-memory-server')
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose')

mongod.getUri().then((mongoUri) => {
    mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));
});
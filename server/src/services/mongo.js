const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://Faruq:faruq@nasa.rvipkfp.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('DB connected successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
};

async function mongoDisconnect() {
    await mongoose.disconnect();
} 

module.exports = {
    mongoConnect,
    mongoDisconnect,
}
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

exports.connect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log('Successfully connected to database')
    })
    .catch( (error) => {
        console.log('database connection failed. Exiting now...');
        console.error(error);
        process.exit(1);
    })
}
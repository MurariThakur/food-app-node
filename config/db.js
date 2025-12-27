const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected successfully ${mongoose.connection.host}`.white.bgGreen);
} catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`.red.bgWhite);
    process.exit(1);
}
    console.log(`MongoDB connected successfully`.white.bgGreen);
};          

module.exports = connectDB;
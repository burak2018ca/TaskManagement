const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DATABASE)
        console.log(`MongoDB connected: ${conn.connection.host}`.green.underline);
    }catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
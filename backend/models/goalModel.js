const { text } = require('body-parser')
const { time, timeStamp } = require('console')
const mongoose = require('mongoose')
const { type } = require('os')

const goalSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    text:{
        type: String,
        required: [true, 'Please add a text value'],
    } }, {timeStamps: true}
)

module.exports = mongoose.model('Goal', goalSchema)
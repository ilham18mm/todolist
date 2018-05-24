const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, unique: true},
    faceId: {type: String, unique: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User;
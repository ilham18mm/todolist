const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: string, unique: true},
    faceId: {type: string, unique: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User;
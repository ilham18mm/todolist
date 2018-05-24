const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: string,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Usertodo'
    },
    task : string,
    tag : string,
    isComplete : Boolean,
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('todo',todoSchema);
module.exports = Todo;
const User = require('../models/user-Schema');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let msg = ''

// find all todo

const findAllusers = (req,res) => {
    User.find()
    .then( users => {
        res.status(200).send(users)
    })
    .catch( err =>{
        res.status(500).send(err)
    })
}

const findone = (req,res) => {
    // console.log(req.params.username);
    User.find({username: req.params.username})
    .then( user => {
        res.status(200).send(user)
    })
    .catch( err =>{
        res.status(500).send(err)
    })
}

const create = (req,res => {
    User.create(
        {
            username : req.body.username,
            email: req.body.email
        }
    )
    .then(user => {
        res.status(200).send(user)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})


const findAndUpdate = (req,res) => {
    User.findByIdAndUpdate(
        {
            _id : req.params.id
        },
        {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        }
    )
    .then(user => {
        msg = 'succes update one data'
        res.status(201).send({newUser: user, message: msg})
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

const findByIdAndRemove = (req,res) => {
    User.findByIdAndRemove({_id : req.params.id})
    .then(userDel => {
        msg = 'User succes deleted'
        res.status(200).send({user:userDel,message: msg})
    })
    .catch(error => {
        console.log(err)
        res.status(500).send(error)
    })
}

const findWhere = (req,res) => {
    User.find('user').where('user').equals(req.params.user).where('tags').in(req.params.tag).
    select('task').
    select('user').select('createdAt').exec((error,todos) => {
        if(!error){
            res.send(todos)
        }
        else {
            res.send(error)
        }
    })
}


module.exports = {
    create,
    findAllusers,
    findone,
    findAndUpdate,
    findByIdAndRemove,
    findWhere
}

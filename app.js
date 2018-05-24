const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/devdbtest')
mongoose.Promise = global.Promise

app.get('/', (req,res) => {
    res.send('sukses')
})

 app.listen(port, (err) => {
     if (!err)
     console.log('ayo jalan', port)
 });

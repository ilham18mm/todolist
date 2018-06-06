const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/devdbtest')
mongoose.Promise = global.Promise
mongoose.connection.once('open', ()=> {
    console.log('Koneksi telah dibuat, buat todo');
}).on('error', (error) => {
    console.log('koneksi error', error.message);
})


app.get('/', (req,res) => {
    res.send('sukses')
})

const api = require('./routers/api')
app.use('/api', api)
app.use((err,req,res,next) => {
    res.status(500).send({error: err})
})

 app.listen(port, (err) => {
     if (!err)
     console.log('ayo jalan', port)
 });

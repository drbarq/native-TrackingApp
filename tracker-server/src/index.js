const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoUri = 'mongodb+srv://admin:passwordpassword@trackerapp-7uhha.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo instance')
})
mongoose.connection.on('errror', (err) => {
    console.error('Error connecting to Mongo', err)
})


app.get('/', (req, res) => {
    res.send('Hi There!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
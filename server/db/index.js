
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Jamem10607:Jamem10607@cluster0-ljff2.mongodb.net/Numerical', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
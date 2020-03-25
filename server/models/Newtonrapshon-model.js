const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Newtonrapshon = new Schema(
    {
        fx: { type: String, required: true },
        x: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Newtonrapshon',Newtonrapshon)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Secant = new Schema(
    {
        fx: { type: String, required: true },
        xold: { type: String, required: true },
        xnew: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Secant',Secant)
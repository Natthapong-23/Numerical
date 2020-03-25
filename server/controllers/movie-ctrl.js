
const Bisection = require('../models/Bisection-model')
const Falseposition = require('../models/Falseposition-model')
const Newtonrapshon = require('../models/Newtonrapshon-model')
const Onepoint = require('../models/Onepoint-model')
const Secant = require('../models/Secant-model')
getBisection = async (req, res) => {
    await Bisection.find({}, (err, Bisection) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Bisection.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: Bisection })
    }).catch(err => console.log(err))
}
getFalseposition = async (req, res) => {
    await Falseposition.find({}, (err,Falseposition) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Falseposition.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: Falseposition })
    }).catch(err => console.log(err))
}
getNewtonrapshon = async (req, res) => {
    await Newtonrapshon.find({}, (err,Newtonrapshon) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Newtonrapshon.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: Newtonrapshon })
    }).catch(err => console.log(err))
}
getOnepoint = async (req, res) => {
    await Onepoint.find({}, (err,Onepoint) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Onepoint.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: Onepoint })
    }).catch(err => console.log(err))
}
getSecant = async (req, res) => {
    await Secant.find({}, (err,Secant) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Secant.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: Secant })
    }).catch(err => console.log(err))
}
module.exports = {
    getBisection,
    getFalseposition,
    getNewtonrapshon,
    getOnepoint,
    getSecant
}
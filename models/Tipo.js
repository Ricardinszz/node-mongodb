const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tipoSchema = mongoose.Schema({
    id: { 
        type: Number,
        required: true,
        min: 0,
    },
    nome: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 45,
        trim: true,
    }
})

const Tipo = mongoose.model('Tipo', tipoSchema)

module.exports = Tipo
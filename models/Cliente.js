const mongoose = require('mongoose')

const schema = mongoose.Schema({
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
    },
    cpf: {
        type: String,
        required: true,
        maxlength: 14,
        match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    },
    telefone: {
        type: String,
        required: true,
        maxlength: 15,
        match: /^\(\d{2}\) \d{4,5}-\d{4}$/,
    },
    email: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
        match: /^\S+@\S+\.\S+$/,
    }
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente

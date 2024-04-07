const mongoose = require('mongoose')
const Schema = mongoose.Schema

const funcionarioSchema = mongoose.Schema({
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
    endereco: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true,
    },
    sexo: {
        type: String,
        required: true,
        maxlength: 1,
        enum: ['M', 'F'],
    },
    telefone: {
        type: String,
        required: true,
        maxlength: 15,
        match: /^\(\d{2}\) \d{4,5}-\d{4}$/,
    },
    cargo: {
        type: Schema.Types.ObjectId,
        ref: 'Cargo',
        required: true,
    }
})

const Funcionario = mongoose.model('Funcionario', funcionarioSchema)

module.exports = Funcionario

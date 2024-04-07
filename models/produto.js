const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    preco: {
        type: Number,
        required: true,
        min: 0,
    },
    tamanho: {
        type: String,
        required: true,
        maxlength: 45,
        trim: true,
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true,
    }
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto

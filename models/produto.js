const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: { 
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
        trim: true,
    },
    preco: {
        type: Number,
        required: true,
        min: [0, 'Mais facil'],
        match: /^\d+(\d{1,2})?$/,
    },
    tamanho: {
        type: String,
        enum: ['Pequeno', 'Médio', 'Grande'],
        default: 'Médio'
    },
    tipo: {
        type: String,
        enum: ['Bebidas', 'Pizzas', 'Sucos'],
        default: 'Médio'
    },
    ingredientes: [{
        type: String,
        enum: ['calabresa', 'queijo', 'massa'],
        required: true
    }]
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto

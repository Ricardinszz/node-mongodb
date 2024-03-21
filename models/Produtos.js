const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
})

const produto = mongoose.model('produto', schema)

module.exports = produto


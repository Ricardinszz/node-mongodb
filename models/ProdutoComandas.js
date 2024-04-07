const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtoComandasSchema = mongoose.Schema({
    id: { 
        type: Number,
        required: true,
        min: 0,
    },
    produto: {
        type: Schema.Types.ObjectId,
        ref: 'Produto',
        required: true,
    },
    comanda: {
        type: Schema.Types.ObjectId,
        ref: 'Comanda',
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
        min: 0,
    }
})

const ProdutoComandas = mongoose.model('ProdutoComandas', produtoComandasSchema)

module.exports = ProdutoComandas
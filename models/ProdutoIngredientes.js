const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtoIngredientesSchema = mongoose.Schema({
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
    ingrediente: {
        type: Schema.Types.ObjectId,
        ref: 'Ingrediente',
        required: true,
    }
})

const ProdutoIngredientes = mongoose.model('ProdutoIngredientes', produtoIngredientesSchema)

module.exports = ProdutoIngredientes
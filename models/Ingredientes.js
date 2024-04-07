const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientesSchema = mongoose.Schema({
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
    descricao: {
        type: String,
        required: true,
    }
})

const Ingrediente = mongoose.model('Ingrediente', ingredientesSchema)


module.exports = Ingrediente
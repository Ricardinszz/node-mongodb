const mongoose = require('mongoose')

const formaPagamentoSchema = mongoose.Schema({
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

const FormaPagamento = mongoose.model('FormaPagamento', formaPagamentoSchema)

module.exports = FormaPagamento

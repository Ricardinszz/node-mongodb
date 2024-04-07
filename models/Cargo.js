const mongoose = require('mongoose')

const cargoSchema = mongoose.Schema({
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

const Cargo = mongoose.model('Cargo', cargoSchema)

module.exports = Cargo

const Produto = require("../models/produto")

const ProdutoControlller = {
    getALL: async(req, res) => {
        res.json( await Produto.find() )
    },
    get: async(req, res) => {
        try {
            res.json(await Produto.findById(req.params.id))    
        } catch (error) {
            res.status(404),json({erro: 'Registro não encontrado'})
        }
    },
    create: async(req, res) => {
        try {
            res.json( await Produto.create(req.body) )
        } catch (error) {
            res.status(400),json(error)
        }
    },
    update: async(req, res) => {
        try {
            res.json( await Produto.findByIdAndUpdate(req.params.id, req.body) ) 
        } catch (error) {
            res.status(404),json({erro: 'Registro não encontrado'})
        }
    },
    delete: async(req, res) => {
        try {
            res.json(await Produto.findByIdAndDelete(req.params.id))  
        } catch (error) {
            res.status(404),json({erro: 'Registro não encontrado'})
        }
    },
}

module.exports = ProdutoControlller
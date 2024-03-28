const express = require('express')
const ProdutoControlller = require('../controllers/ProdutoController')
const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})
router.get('/produtos', (req, res) => ProdutoControlller.getALL(req, res))
router.post('/produtos', (req, res) => ProdutoControlller.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoControlller.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoControlller.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoControlller.delete(req, res))

module.exports = router
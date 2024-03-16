const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.json({msg: 'Rota princeipal'})
})

app.listen(3000, function(){
    console.log('servidor tá rodando')
})
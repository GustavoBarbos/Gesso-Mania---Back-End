const {Router} = require('express')
const Compra = require('../models/Compra.model')

const route = Router()

route.post('/compra', async(req,res)=>{
    const payload = req.body

    try {
        await Compra.create(payload)
        res.status(200).json(payload)
    } catch (error) {
        res.status(500).json({msg:"Erro ao criar nova compra"})
    }
})

route.get('/compra', async(req, res)=>{

    try {
        const compras = await Compra.find()
        res.status(200).json(compras)
    } catch (error) {
        res.status(500).json({msg:"Erro"})
    }
})

route.delete('/compra/:id', async(req, res)=>{
    const {id} = req.params
    try {
        await Compra.findByIdAndDelete(id)
        res.status(200).json({msg:`compra ${id} deletada com sucesso`})
    } catch (error) {
        res.status(500).json({msg:"Erro ao deletar"})
        
    }
})

module.exports = route
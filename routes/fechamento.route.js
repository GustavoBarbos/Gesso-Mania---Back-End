const {Router} = require('express')
const Fechamento = require('../models/Fechamento.model')

const route = Router()

route.post('/fechamento', async (req,res)=>{
    const payload = req.body
    
    try {
        await Fechamento.create(payload)
        res.status(201).json(payload)
    } catch (error) {
        res.status(500).json({msg:"erro ao criar o usuário"})
    }
})

route.delete('/fechamento/:id', async (req, res)=>{
    const {id} = req.params
    try {
        await Fechamento.findByIdAndDelete(id)
        res.status(200).json({msg:`fechamento ${id} deletado com sucesso`})
    } catch (error) {
        res.status(500).json({msg:"erro ao deletar fechamento"})
    }
})

route.get('/fechamento', async (req, res)=>{
    try {
        const fechamentos = await Fechamento.find()
        res.status(200).json(fechamentos)
    } catch (error) {
        res.status(500).json({msg:"Erro"})
    }
})

module.exports = route
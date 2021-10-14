const {Router} = require('express')
const Fechamento = require('../models/Fechamento.model')

const route = Router()

route.post('/fechamento', async (req,res)=>{
    const payload = req.body
    console.log(payload)
    try {
        await Fechamento.create(payload)
        res.status(201).json(payload)
    } catch (error) {
        res.status(500).json({msg:"erro ao criar o usuário"})
    }
})

module.exports = route
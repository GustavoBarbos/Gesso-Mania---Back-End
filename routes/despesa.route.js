const {Router} = require('express')
const Despesa = require('../models/Despesa.model')

const route = Router()

route.post('/despesa', async(req,res)=>{
    const payload = req.body
    try {
        await Despesa.create(payload)
        res.status(200).json(payload)
    } catch (error) {
        res.status(500).json({msg:"erro ao criar nova despesa"})
    }
})

route.get('/despesa', async(req,res)=>{

    try {
        const despesa = await Despesa.find()
        res.status(200).json(despesa)
    } catch (error) {
        res.status(500).json({msg:"Erro"})
    }
})

route.delete('/despesa/:id', async(req,res)=>{
    const {id} = req.params
    try {
        await Despesa.findByIdAndDelete(id)
        res.status(200).json({msg:"despesa removida com sucesso"})
    } catch (error) {
        res.status(500).json({msg:"Erro ao deletar despesa"})
    }
})

module.exports = route
const {Router} = require('express')
const Orcamento = require('../models/Orcamento.model')

const route = Router();

route.get('/orcamento', async (req,res) => {

    try {

        const orcamentos = await Orcamento.find()
        res.status(200).json(orcamentos)
        
    } catch (error) {
        res.status(500).json({msg: "Error"})
    }
});

route.post('/orcamento', async (req,res) => {

    const payload = req.body
  
    try {

        await Orcamento.create(payload)
        res.status(201).json(payload)
        
    } catch (error) {

        res.status(500).json({msg: "Error"})
        
    }

})

route.get('/orcamento/:id', async (req,res) => {

    const id = req.params.id

    try {
        const orcamento = await Orcamento.findById(id)
       
        res.status(200).json(orcamento)
    } catch (error) {
        res.status(500).json({msg : "Error"})
    }

})

route.delete('/orcamento/:id', async (req,res) => {

    const id = req.params.id


    try {
        const orcamento = await Orcamento.findById(id)
        await Orcamento.findByIdAndDelete(id)
        res.status(200).json({msg : "Deletado com sucesso", orcamento: orcamento})
    } catch (error) {
        res.status(400).json({msg : "Error"})
    }

})

module.exports = route

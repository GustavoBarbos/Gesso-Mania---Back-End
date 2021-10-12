const {Router} = require('express')
const Cliente = require('../models/Cliente.model')

const route = Router();

route.get('/cliente', async (req,res) => {

    try {

        const clientes = await Cliente.find()
        res.status(200).json(clientes)
        
    } catch (error) {
        res.status(500).json({msg: "Error"})
    }
});

route.post('/cliente', async (req,res) => {

    const payload = req.body
  
    try {

        await Cliente.create(payload)
        res.status(201).json(payload)
        
    } catch (error) {

        res.status(500).json({msg: "Error"})
        
    }

})

route.get('/cliente/:id', async (req,res) => {

    const id = req.params.id

    try {
        const cliente = await Cliente.findById(id)
       
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({msg : "Error"})
    }

})

route.delete('/cliente/:id', async (req,res) => {

    const id = req.params.id


    try {
        const cliente = await Cliente.findById(id)
        await Cliente.findByIdAndDelete(id)
        res.status(200).json({msg : "Deletado com sucesso", cliente: cliente})
    } catch (error) {
        res.status(400).json({msg : "Error"})
    }

})

module.exports = route

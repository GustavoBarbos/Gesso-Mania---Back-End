const {Router} = require('express')
const { findByIdAndUpdate } = require('../models/Produto.model')
const Produto = require('../models/Produto.model')

const route = Router()

route.get('/produtos', async (req,res)=>{
    try {
        
        const produtos = await Produto.find()
    
        res.status(200).json(produtos)
    } catch (error) {
        res.status(500).json({msg:error})
    }

})

route.post('/produtos' , async (req,res)=>{
    const payload = req.body
    try {
        await Produto.create(payload)
        res.status(201).json(payload)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.delete('/produtos/:id' , async (req,res)=>{
    const {id} = req.params
    try {
        await Produto.findByIdAndDelete(id)
        res.status(201).json({msg:`produto deletado com sucesso`})
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/produtos/:name' , async (req,res)=>{
    const {name} = req.params
    const payload = req.body
    const produto = await Produto.findOne({"name":name})
    const {quantidade_em_estoque} = produto
    console.log(quantidade_em_estoque)

    const result = quantidade_em_estoque - payload.quantidade

    try {
        await Produto.findOneAndUpdate({"name":name}, {$set:{"quantidade_em_estoque":result}},{new:true})
        res.status(201).json({msg:`produto deletado com sucesso`})
    } catch (error) {
        res.status(500).json(error)
    }
})







module.exports = route
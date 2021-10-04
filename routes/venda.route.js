const { Router } = require('express')

const Venda = require('../models/Venda.model')

const route = Router()

route.get('/vendas', async (req, res) => {

    try {
        const vendas = await Venda.find()
        res.status(200).json(vendas)
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }

})

route.post('/vendas', async (req, res) => {

    const payload = req.body
    try {

        const venda = await Venda.create(payload)
        res.status(201).json(venda)

    } catch (error) {

        res.status(500).json({ msg: "Error" })

    }
})

route.delete('/vendas/:id', async (req,res) => {

    const id = req.params.id


    try {
        const venda = await Venda.findById(id)
        await Venda.findByIdAndDelete(id)
        res.status(200).json({msg : "Deletado com sucesso", venda : venda})
    } catch (error) {
        res.status(400).json({msg : "Error"})
    }

})

route.delete('/vendas/:id/:idprodutos', async (req, res) => {

    const { id, idprodutos } = req.params



    try {
  
        await Venda.updateOne( { _id: id }, { $pull: { produtos: { _id: { $eq : idprodutos} } } } )
        res.status(200).json({msg:"deu certo"})
    } catch (error) {
        res.status(400).json({ msg: "Error" })
    }

})


module.exports = route
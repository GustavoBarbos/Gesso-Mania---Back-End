const {Router} = require('express')
const Venda = require('../models/Venda.model')

const route = Router()

route.get('/vendas', async (req,res) => {

    try {
        const vendas = await Venda.find()
        res.status(200).json(vendas)
    } catch (error) {
        res.status(500).json({msg: "Error"})
    }

})

module.exports = route
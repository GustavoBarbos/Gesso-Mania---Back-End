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
//criar um novo produto
route.post('/produtos' , async (req,res)=>{
    const payload = req.body
    try {
        await Produto.create(payload)
        res.status(201).json(payload)
    } catch (error) {
        res.status(500).json(error)
    }
})
//deletar um produto do estoque
route.delete('/produtos/:id' , async (req,res)=>{
    const {id} = req.params
    try {
        await Produto.findByIdAndDelete(id)
        res.status(201).json({msg:`produto deletado com sucesso`})
    } catch (error) {
        res.status(500).json(error)
    }
})
//alterar a quantidade de um produto no estoque após a venda
route.put('/produtos/:name' , async (req,res)=>{
    const {name} = req.params // nome do produto que será removido
    const payload = req.body  //quantidade que será removida no estoque
    const produto = await Produto.findOne({"name":name})
    const {quantidade_em_estoque} = produto

    const result = quantidade_em_estoque - payload.quantidade

    try {
        await Produto.findOneAndUpdate({"name":name}, {$set:{"quantidade_em_estoque":result}},{new:true})
        res.status(201).json({msg:`produto deletado com sucesso`})
    } catch (error) {
        res.status(500).json(error)
    }
})

//no estoque, alterar o produto

route.put('/produtos/estoque/:id', async (req,res)=>{
    const {id} = req.params
    const payload = req.body
    console.log(payload)
    const {name,quantidade_em_estoque,descricao,valor_de_venda,img_Url,modificado_por} = payload
    try {
        await Produto.findByIdAndUpdate(id,{$set:{"name":name,
                                                "quantidade_em_estoque":quantidade_em_estoque,
                                                "descricao":descricao,
                                                "valor_de_venda":valor_de_venda,
                                                "img_Url":img_Url,
                                                "modificado_por":modificado_por}},
                                                {new:true}
                                        )
        res.status(201).json({msg:'alterado com sucesso'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
    
})

//rota produto metodo put para alterar apenas a quantidade do produto 
route.put('/produtos/estoque/qtd/:name' , async (req,res)=>{
    const {name} = req.params // nome do produto que será removido
    const payload = req.body  //quantidade que será removida no estoque
    const produto = await Produto.findOne({"name":name})
    const {quantidade_em_estoque} = produto

    const result = quantidade_em_estoque + payload.quantidade

    try {
        await Produto.findOneAndUpdate({"name":name}, {$set:{"quantidade_em_estoque":result}},{new:true})
        await Produto.findOneAndUpdate({"name":name}, {$set:{"modificado_por":payload.modificado_por}},{new:true})
        res.status(201).json({msg:`produto acrescentado com sucesso`})
    } catch (error) {
        res.status(500).json(error)
    }
})






module.exports = route
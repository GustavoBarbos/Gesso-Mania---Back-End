const {Router} = require('express')
const Colaborador = require('../models/Colaborador.model')

const route = Router()

route.post('/colaborador', async(req, res)=>{
    const payload = req.body

    try {
        await Colaborador.create(payload)
        res.status(200).json(payload)
    } catch (error) {
        res.status(500).json({msg:"Erro ao criar novo colaborador"})
    }
})

route.get('/colaborador', async(req, res)=>{
    
    try {
        const colaboradores = await Colaborador.find()
        res.status(200).json(colaboradores)
    } catch (error) {
        res.status(500).json({msg:"Erro"})
    }
})


route.put('/colaborador/:id', async(req, res)=>{
    const {id} = req.params
    const payload = req.body
    const {nome, cargo, ativo, data_de_entrada, data_de_saida,salario} = payload
    try {
        await Colaborador.findByIdAndUpdate(id,
            {$set:{
                "nome":nome,
                "cargo":cargo,
                "ativo":ativo,
                "data_de_entrada":data_de_entrada,
                "data_de_saida":data_de_saida,
                "salario":salario
            }}
            , {new:true})
        res.status(200).json(payload)
    } catch (error) {
        res.status(500).json({msg:"Erro"})
    }
})

route.delete('/colaborador/:id', async (req, res)=>{
    const {id} = req.params
    try {
        await Colaborador.findByIdAndDelete(id)
        res.status(200).json({msg:`Colaborador ${id} deletado com sucesso`})
    } catch (error) {
        res.status(500).json({msg:'Erro ao deletar'})
    }
})

module.exports = route
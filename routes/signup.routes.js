const {Router} = require('express');
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')

const route = Router()

route.get('/signup', async (req,res) => {

    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})

route.post('/signup', async (req,res) => {

    const {username , password} = req.body
    
    try {

        const verifyUser = await User.findOne({username})

        if(verifyUser){
            throw new Error('Usuário já existente')
        }
        if(!username || !password){
            throw new Error('Username ou password vazio')
        }
        if(username.length <= 3 ){
            throw new Error('Username deve conter pelo menos 4 dígitos')
        }
        if(password.length !== 6){  
            throw new Error('Password deve conter 6 dígitos')
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password,salt);
  
        const payload = {
            username,
            passwordHash
        }

        const newUser = await User.create(payload)
        res.status(201).json({msg : `Usuário ${payload.username} criado com sucesso`})

    } catch (error) {
       
        res.status(500).json({msg : `${error}`});
    }

})

module.exports = route
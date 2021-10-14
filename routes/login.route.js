const {Router} = require('express');
const User = require('../models/User.model');
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const router = Router()

router.post('/login', async (req,res) => {

    const {username , password} = req.body
    

    try {

        const user = await User.findOne({username})
        if(!user){
            throw new Error('Usuário não existente')
        }
        

        if(!username || !password){
            throw new Error('Usuário ou senha inválido')
        } 

        const validation = bcrypt.compareSync(password, user.passwordHash)

        if(!validation){
            throw new Error('Usuário ou senha inválido')
        }

        const payload = {
            id: user.id,
            username: user.username
        }

        const token = jwt.sign(
            payload,
            process.env.SECRET_JWT,
            {
                expiresIn: '30day'
            }
        )

        const senhaAdmin = process.env.SENHA_ADMIN

            res.status(200).json({msg : payload,token,senhaAdmin})

    } catch (error) {
        
        res.status(400).json({msg: `${error}`})
    }


})

module.exports = router
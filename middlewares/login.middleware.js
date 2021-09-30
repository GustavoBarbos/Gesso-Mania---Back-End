const jwt = require('jsonwebtoken')

const login = (req, res, next) => {

const token = req.get('Authorization')

if(!token){
    res.status(401).json({msg : `token inválido`})
}

const verifytoken = token.split(' ')[1]

try {
    
    const decodedToken = jwt.verify(verifytoken, process.env.SECRET_JWT)

    req.user = {...decodedToken}

    next()

} 
catch (error) {
    
    res.status(500).json({msg: `Token Inválido`})

}
}

module.exports = login
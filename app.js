require('dotenv').config()
require('./config/db.config')

// Rotas
const VendaRoute = require('./routes/venda.route')
const UserRoute = require('./routes/signup.route')
const LoginRoute = require('./routes/login.route')
const OrcamentoRoute = require('./routes/orcamento.route')
const ProdutoRoute = require('./routes/produto.route')


const loginMiddleware = require('./middlewares/login.middleware')


const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors())


// Rotas Publicas

app.use('/', LoginRoute)


app.use(loginMiddleware)

// rotas privadas 


app.use('/', OrcamentoRoute)
app.use('/', VendaRoute)
app.use('/', UserRoute)
app.use('/', ProdutoRoute)



app.listen(process.env.PORT, () => console.log("Começou gesseiro"))
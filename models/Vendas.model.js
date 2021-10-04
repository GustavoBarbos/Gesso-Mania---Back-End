const { Schema, model } = require('mongoose')

const VendasSchema = new Schema(
   
    {
        vendedor : String,
        cliente: String,
        produtos: [{
        
        nome: {type: String, required: true},
        quantidade: {type: Number,required:true},
        valorUnitário: {type: Number, required: true},
        
        }],

        data: { type:String, required: true },
        valor_total: { type : Number, required: true },
        }
        
      
)

module.exports = model("Vendas", VendasSchema)
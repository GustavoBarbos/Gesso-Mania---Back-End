const { Schema, model } = require('mongoose')

const VendaSchema = new Schema(
   
    {
        vendedor : String,
        cliente: String,
        produtos: [{
        
        nome: {type: String, required: true},
        quantidade: {type: Number,required:true},
        valorUnitário: {type: Number, required: true},
        
        }], 

        data: { type : Date, required: true },
        valor_total: { type : Number, required: true },
        }
        
      
)

module.exports = model("Venda", VendaSchema)
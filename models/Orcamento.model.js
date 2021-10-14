const { Schema, model } = require('mongoose')

const OrcamentoSchema = new Schema(
   
{

vendedor: String,
cliente:String,
produtos: [{
        
    nome: {type: String, required: true},
    quantidade: {type: Number,required:true},
    valorUnitário: {type: Number, required: true},
    
    }],
data:String,
status: String,
valor_total:Number,
frete:Number

}
  
      
)

module.exports = model("Orcamento", OrcamentoSchema)
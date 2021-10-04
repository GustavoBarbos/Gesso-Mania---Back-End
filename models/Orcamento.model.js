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
valor_total:Number

}
  
      
)

module.exports = model("Orcamento", OrcamentoSchema)
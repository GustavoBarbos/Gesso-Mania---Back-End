const {Schema, model} = require('mongoose')


const ClienteSchema = new Schema(
            {
            vendedor: {type:String, required:true},
            cliente: {type:String, required:true},
            produtos: [{
                    
                nome: {type: String, required: true},
                quantidade: {type: Number,required:true},
                valorUnitário: {type: Number, required: true},
                
                }],
            data:String,
            valor_total:Number
            
            }
               
    
)

module.exports = model("Cliente", ClienteSchema)
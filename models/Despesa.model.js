const {Schema, model} = require('mongoose')


const DespesaSchema = new Schema (
    {
        name:{type:String, required:true},
        gasto:{type:Number},
        data:Date,
        descricao:{type:String}
    }
)

module.exports = model("Despesa", DespesaSchema)
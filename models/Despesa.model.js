const {Schema, model} = require('mongoose')


const DespesaSchema = new Schema (
    {
        name:{type:String, required:true},
        gasto_total:{type:Number},
        data:Date,
        descricao:{type:String},
        user: {type : String, required : true}
    },
    {
        timestamps:true
    }
)

module.exports = model("Despesa", DespesaSchema)
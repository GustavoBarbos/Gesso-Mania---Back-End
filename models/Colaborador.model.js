const {Schema, model} = require('mongoose')


const ColaboradorSchema = new Schema (
    {
        name:{type:String, unique:true, required:true},
        img:{type:String},
        data_de_criacao:Date,
        data_de_saida:Date,
        cargo:String,
        salario:{type:Number, required},
        situacao:{type:Boolean, required}
    }
)

module.exports = model("Colaborador", ColaboradorSchema)
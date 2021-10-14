const {Schema, model} = require('mongoose')


const ProdutoSchema = new Schema (
    {
        name:{type:String, unique:true, required:true},
        quantidade_em_estoque:{type:Number},
        valor_de_venda:{type:Number},
        descricao:{type:String},
        img_Url:{type:String},
        modificado_por:{type:String},
        valor_de_compra:{type:Number}
    }
)

module.exports = model("Produto", ProdutoSchema)
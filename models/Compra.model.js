const {Schema, model} = require('mongoose')


const CompraSchema = new Schema (
    {
        data:{type:Date, required:true},
        valor_total_compra:{type:Number, required:true},
        compra_produtos:[
            {
                name:String,
                valor_de_venda:Number,
                valor_de_compra:Number,
                quantidade:Number
            }
        ],
        user: {type : String, required : true}
    },
    {
        timestamps: true
    }
)

module.exports = model("Compra", CompraSchema)
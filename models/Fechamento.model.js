const { Schema, model } = require("mongoose");

const FechamentoSchema = new Schema({
  data: { type: Date, required: true },
  valor_total_vendas_do_mes: Number,
  salarios_colaboradores: Number,
  aluguel: Number,
  valor_total_compras_do_mes: Number,
  DespesasGerais: [
    { nome: String, valor: Number, descricao: String },
  ],
  despesas_gerais_valor: Number,
  despesas_totais: Number,
  resultado: Number,
  user: {type : String, required : true}
},
{
  timestamps:true
});

module.exports = model("Fechamento", FechamentoSchema);

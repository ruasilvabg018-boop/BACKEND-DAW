const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  idade: {type: Number, required: true},
  peso: {type: Number, required: true},
  personal: {type: mongoose.Schema.Types.ObjectId, ref: "Personal", required: true}
}, { timestamps: true });

module.exports = mongoose.model("Aluno", AlunoSchema);
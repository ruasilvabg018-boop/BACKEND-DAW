const mongoose = require("mongoose");

const ExercicioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  limiteCarga: { type: Number, required: true },
  grupoMuscularAlvo: { type: String, required: true },
  perfilResistencia: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Exercicio", ExercicioSchema);
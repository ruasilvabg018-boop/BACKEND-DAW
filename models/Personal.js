const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  foto: { type: String, required: true }, // URL da foto
  anosExperiencia: { type: Number, required: true },
  telefone: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Personal", PersonalSchema);
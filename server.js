require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./Swagger/Swagger.json");
const app = express();
const alunoRoutes = require("./routes/alunoRoutes");
const exercicioRoutes = require("./routes/exercicioRoutes");
const personalRoutes = require("./routes/personalRoutes");
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/alunos", alunoRoutes);
app.use("/exercicios", exercicioRoutes);
app.use("/personais", personalRoutes);

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/academia";
const PORT = process.env.PORT || 3000;

console.log(`Connecting to MongoDB at ${MONGO_URI}`);

mongoose.connect(MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error("Mongo connection error:", err.message, err));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


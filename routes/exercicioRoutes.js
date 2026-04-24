const express = require("express");
const router = express.Router();

const { createExercicio, listExercicios, getExercicioById, updateExercicio, deleteExercicio } = require("../controllers/exercicioController");

router.post("/", createExercicio);
router.get("/", listExercicios);
router.get("/:id", getExercicioById);
router.put("/:id", updateExercicio);
router.delete("/:id", deleteExercicio);

module.exports = router;
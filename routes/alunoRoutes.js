const express = require("express");
const router = express.Router();

const { createAluno, listAlunos, getAlunoById, updateAluno, deleteAluno } = require("../controllers/alunoController");

router.post("/", createAluno);
router.get("/", listAlunos);
router.get("/:id", getAlunoById);
router.put("/:id", updateAluno);
router.delete("/:id", deleteAluno);

module.exports = router;
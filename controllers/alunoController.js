const Aluno = require("../models/Aluno");

const createAluno = async (req, res) => {
    try {
        const aluno = await Aluno.create(req.body);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find().populate('personal');
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAluno = async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAluno = async (req, res) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.json({ msg: "Aluno deletado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAlunoById = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id).populate('personal');
        if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createAluno, listAlunos, getAlunoById, updateAluno, deleteAluno };
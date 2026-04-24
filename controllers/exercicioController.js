const Exercicio = require("../models/Exercicio");

const createExercicio = async (req, res) => {
    try {
        const exercicio = await Exercicio.create(req.body);
        res.status(201).json(exercicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listExercicios = async (req, res) => {
    try {
        const exercicios = await Exercicio.find();
        res.json(exercicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateExercicio = async (req, res) => {
    try {
        const exercicio = await Exercicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(exercicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteExercicio = async (req, res) => {
    try {
        await Exercicio.findByIdAndDelete(req.params.id);
        res.json({ msg: "Exercício deletado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getExercicioById = async (req, res) => {
    try {
        const exercicio = await Exercicio.findById(req.params.id);
        if (!exercicio) return res.status(404).json({ error: "Exercício não encontrado" });
        res.json(exercicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createExercicio, listExercicios, getExercicioById, updateExercicio, deleteExercicio };
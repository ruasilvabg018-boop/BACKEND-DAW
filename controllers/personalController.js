const Personal = require("../models/Personal");

const createPersonal = async (req, res) => {
    try {
        const fotoPath = req.file ? `/uploads/${req.file.filename}` : req.body.foto;
        const personal = await Personal.create({
            nome: req.body.nome,
            foto: fotoPath,
            anosExperiencia: req.body.anosExperiencia,
            telefone: req.body.telefone
        });
        res.status(201).json(personal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listPersonais = async (req, res) => {
    try {
        const personais = await Personal.find();
        res.json(personais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPersonalById = async (req, res) => {
    try {
        const personal = await Personal.findById(req.params.id);
        if (!personal) return res.status(404).json({ error: "Personal não encontrado" });
        res.json(personal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePersonal = async (req, res) => {
    try {
        const updateData = {
            nome: req.body.nome,
            anosExperiencia: req.body.anosExperiencia,
            telefone: req.body.telefone
        };

        if (req.file) {
            updateData.foto = `/uploads/${req.file.filename}`;
        } else if (req.body.foto) {
            updateData.foto = req.body.foto;
        }

        const personal = await Personal.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(personal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePersonal = async (req, res) => {
    try {
        await Personal.findByIdAndDelete(req.params.id);
        res.json({ msg: "Personal deletado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPersonal, listPersonais, getPersonalById, updatePersonal, deletePersonal };
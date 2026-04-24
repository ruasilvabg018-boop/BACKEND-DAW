const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const { createPersonal, listPersonais, getPersonalById, updatePersonal, deletePersonal } = require("../controllers/personalController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/\s+/g, "-").toLowerCase();
    cb(null, `${timestamp}-${safeName}`);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("foto"), createPersonal);
router.get("/", listPersonais);
router.get("/:id", getPersonalById);
router.put("/:id", upload.single("foto"), updatePersonal);
router.delete("/:id", deletePersonal);

module.exports = router;
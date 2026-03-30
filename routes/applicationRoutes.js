const express = require("express");
const router = express.Router();

const { applyJob, getMyApplications } = require("../controllers/applicationController");
const authMiddleware = require("../middleware/authMiddleware");

// apply job (protected)
router.post("/apply", authMiddleware, applyJob);

// get my applications
router.get("/my", authMiddleware, getMyApplications);

module.exports = router;
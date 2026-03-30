const express = require("express");
const router = express.Router();

const { createJob, getJobs } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

// protected route → only logged-in users
router.post("/create", authMiddleware, createJob);

// public route
router.get("/", authMiddleware, getJobs);

module.exports = router;
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// protected route
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed ✅",
        user: req.user
    });
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
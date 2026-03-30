const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // get token from headers
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({
                message: "No token, access denied"
            });
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach user to request
        req.user = decoded;

        next(); // go to next function

    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = authMiddleware;
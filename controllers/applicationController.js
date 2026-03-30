const Application = require("../models/Application");

// ================= APPLY JOB =================
exports.applyJob = async (req, res) => {
    try {
        const { jobId } = req.body;

        const application = new Application({
            user: req.user.id,
            job: jobId
        });

        await application.save();

        res.status(201).json({
            message: "Applied successfully",
            application
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error applying for job"
        });
    }
};

// ================= GET MY APPLICATIONS =================
exports.getMyApplications = async (req, res) => {
    try {
        const applications = await Application.find({ user: req.user.id })
            .populate("job");

        res.status(200).json(applications);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching applications"
        });
    }
};
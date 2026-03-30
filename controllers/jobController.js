const Job = require("../models/Job");

// ================= CREATE JOB =================
exports.createJob = async (req, res) => {
    try {
        const { title, company, location, salary, description } = req.body;

        const job = new Job({
            title,
            company,
            location,
            salary,
            description,
            createdBy: req.user.id   // from JWT
        });

        await job.save();

        res.status(201).json({
            message: "Job created successfully",
            job
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating job"
        });
    }
};

// ================= GET ALL JOBS =================
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ createdBy: req.user.id })   // ✅ FILTER

        res.status(200).json(jobs);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching jobs"
        });
    }
};
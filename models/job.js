(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const jobSchema = new Schema({
        summary: { type: String, required: true },
        title: { type: String, required: true },
        link: { type: String, required: true }
    });

    const Job = mongoose.model("Job", jobSchema);

    module.exports = Job;
})();
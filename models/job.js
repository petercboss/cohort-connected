(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const jobSchema = new Schema({
        company: { type: String},
        title: { type: String},
        link: { type: String, required: true },
        comment: { type: String}
    });

    const Job = mongoose.model("Job", jobSchema);

    module.exports = Job;
})();
(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const jobSchema = new Schema({
        title: { type: String, required: true },
        company: { type: String, required: true },
        summary: { type: String, required: true },
        link: { type: String, required: true },
        postingDate: Date,
        thumbsUp: { type: Number, default: 0 },
        thumbsDown: { type: Number, default: 0 },
        comment: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    });

    const Job = mongoose.model("Job", jobSchema);

    module.exports = Job;
})();
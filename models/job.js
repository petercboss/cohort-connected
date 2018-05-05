(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const jobSchema = new Schema({
        summary: { type: String, required: true },
        title: { type: String, required: true },
        link: { type: String, required: true },
        thumbsUp: { type: Number, default: 0 },
        thumbsDown: { type: Number, default: 0 },
        date: { type: Date, default: Date.now },
        comment: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    });

    const Job = mongoose.model("Job", jobSchema);

    module.exports = Job;
})();
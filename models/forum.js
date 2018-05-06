(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const forumSchema = new Schema({
        title: { type: String, required: true, maxlength: [20, 'Title length cannot exceed 20 characters'] },
        summary: { type: String, required: true },
        postingDate: { type: Date, default: Date.now(), required: true },
        author: { _id: { type: String, required: true },
                  author: { type: String, required: true }},
        comment: [{
            author: { type: String, required: true },
            body: { type: String, required: true },
            postingDate: { type: Date, default: Date.now(), required: true },
            upVote: { type: Number, default: 0, required: true },
            downVote: { type: Number, default: 0, required: true }
        }]
    });

    const Forum = mongoose.model("Forum", forumSchema);

    module.exports = Forum;
})();
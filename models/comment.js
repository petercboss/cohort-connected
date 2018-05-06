(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const commentSchema = new Schema({
        author: { type: String, required: true },
        body: { type: String, required: true },
        postingDate: { type: Date, default: Date.now(), required: true },
        upVote: { type: Number, default: 0, required: true },
        downVote: { type: Number, default: 0, required: true }
    });

    const Comment = mongoose.model("Comment", commentSchema);

    module.exports = Comment;
})();
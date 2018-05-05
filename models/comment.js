(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const commentSchema = new Schema({
        body: { type: String, required: true },
        upVote: { type: Number, default: 0 },
        downVote: { type: Number, default: 0 }
    });

    const Comment = mongoose.model("Comment", commentSchema);

    module.exports = Comment;
})();
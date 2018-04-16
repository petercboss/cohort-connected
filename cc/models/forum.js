const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    postingDate: { type: Date, default: Date.now },
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const newsSchema = new Schema({
        title: { type: String, required: true, unique: true },
        author: { type: String, required: true },
        summary: { type: String },
        link: { type: String, required: true },
        photo: { type: String, require: true },
        postingDate: Date,
        thumbsUp: { type: Number, default: 0 },
        thumbsDown: { type: Number, default: 0 },
        comment: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    });

    const News = mongoose.model("News", newsSchema);

    module.exports = News
})();
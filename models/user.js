(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const userSchema = new Schema({
        linkedInId: {type: String,required: true},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        unreadMessages:[],
        unread:{type: Number, default: 0},
        headline: String,
        location: String,
        profilePicURL: String,
        verified: Boolean,
        faveNews: [{
            type: Schema.Types.ObjectId,
            ref: 'News'
        }],
        faveEvents: [{
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }],
        faveQuestions: [{
            type: Schema.Types.ObjectId,
            ref: 'Forum'
        }],
        faveJobs: [{
            type: Schema.Types.ObjectId,
            ref: 'Job'
        }]
    });

    const User = mongoose.model("User", userSchema);

    module.exports = User;
})();
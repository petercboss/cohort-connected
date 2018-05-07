(()=>{
    const mongoose = require('mongoose');
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
        news: [{
            type: Schema.Types.ObjectId,
            ref: 'News'
        }],
        events: [{
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }],
        forum: [{
            type: Schema.Types.ObjectId,
            ref: 'Forum'
        }],
        jobs: [{
            type: Schema.Types.ObjectId,
            ref: 'Job'
        }]
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;
})();
(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const eventSchema = new Schema({
        title: { type: String, required: true, unique: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        organizer: String,
        categories: { type: Array },
        comment: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    });

    const Event = mongoose.model("Event", eventSchema);

    module.exports = Event;
})();
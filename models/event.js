(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const eventSchema = new Schema({
        title: { type: String, required: true },
        date: { type: Date, required: true },
        time: { type: Date, required: true },
        summary: { type: String, required: true },
        location: String,
        attending: { type: Number, default: 0 },
        comment: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    });

    const Event = mongoose.model("Event", eventSchema);

    module.exports = Event;
})();
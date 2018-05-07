(()=>{
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const eventSchema = new Schema({
        title: { type: String, required: true, unique: true },
        link: { type: String, required: true },
        date: { type: Date, required: true },
        day: { type: String, required: true },
        time: { type: String, required: true },
        organizer: String,
        categories: { type: Array },
    });

    const Event = mongoose.model('Event', eventSchema);

    module.exports = Event;
})();
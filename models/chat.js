(()=>{
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const chatSchema = new Schema({
        chatId: { type: String, required: true, unique: true },
        // userOne: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }],
        // userTwo: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }],
        messages: []
    });

    const Chat = mongoose.model("Chat", chatSchema);

    module.exports = Chat;
})();                                                        
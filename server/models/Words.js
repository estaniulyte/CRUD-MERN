const mongoose = require("mongoose");

const WordsSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    wordTranslation: {
        type: String,
        required: false,
    },
});

const Words = mongoose.model("en-words", WordsSchema);
module.exports = Words;
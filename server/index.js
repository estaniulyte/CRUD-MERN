const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const WordsModel = require('./models/Words');


app.use(express.json()); // receive information from fronted in json format
app.use(cors()); // to communicate with APIs created in app, so cors policy wouldn't block requests

mongoose.connect(
    "mongodb+srv://crud-tutorial:HYGrTLRiPlMVSdkP@crud.c24kg.mongodb.net/words?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.post('/insert', async (req, res) => {
    const word = req.body.word;
    const translation = req.body.translation;

    const words = new WordsModel({ word: word, wordTranslation: translation });

    try {
        await words.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
})

app.listen(3001, () => {
    console.log('Server running on port 3001...')
});
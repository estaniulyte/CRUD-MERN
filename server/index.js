const express = require('express');
const mongoose = require('mongoose');
const app = express();

const WordsModel = require('./models/Words');


app.use(express.json()); // receive information from fronted in json format

mongoose.connect(
    "mongodb+srv://crud-tutorial:HYGrTLRiPlMVSdkP@crud.c24kg.mongodb.net/words?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.get('/', async (req, res) => {
    const words = new WordsModel({ word: "Moon", wordTranslation: "Menulis" });

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
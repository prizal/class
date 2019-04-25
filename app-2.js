const express = require('express');
const mongoose = require ('mongoose');

const app = express();
const port = 3001;

let Schema = mongoose.Schema;

let personSchema = new Schema({
    name: {
    first: 'String',
    Last:   String,
    }
});

let Person = mongoose.model('Person', personSchema);
app.get('/',(req,res) => {
    console.log('mongoose schema is called');
})

app.get('/',(req,res) => {

}


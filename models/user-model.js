const { model, Schema } = require('mongoose');


const schema = new Schema({
    title: String,
    body: String,
    date: Date
});

module.exports = model('User', schema);
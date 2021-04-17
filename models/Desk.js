const {Schema, model} = require('mongoose')

const schema = new Schema({
    text: {type: String, required: true},
    author: {type: String, required: true, ref: 'User'}
})

module.exports = model('Desk', schema)
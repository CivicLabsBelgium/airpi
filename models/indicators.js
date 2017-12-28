'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IndicatorSchema = new Schema({
    value: {
        type: String,
        required: 'Kindly provide the value of the indicator'
    }
});

module.exports = mongoose.model('Indicators', IndicatorSchema);
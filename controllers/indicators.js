'use strict';

var mongoose = require('mongoose');
var Indicators = mongoose.model('Indicators');

exports.createIndicator = function(request, response) {
    var newIndicator = new Indicator(request.body);
    newIndicator._id = {sensorId: request.params.sensorId, indicatorId: request.params.indicatorId};

    newIndicator.save(function(err, indicator) {
        if (err) response.send(err);

        response.json(indicator);
    });
};

exports.readIndicator = function(request, response) {
    response.status(200).send(Math.floor(Math.random() * 100).toString());
    // Indicators.findById({sensorId: request.params.sensorId, indicatorId: request.params.indicatorId}, function(err, indicator) {
    //     if (err) response.send(err);
    //
    //     //response.json(indicator);
    //     response.send(Math.floor(Math.random() * 100));
    // });
};

exports.updateIndicator = function(request, response) {
    Indicators.findOneAndUpdate({_id: {sensorId: request.params.sensorId, indicatorId: request.params.indicatorId}}, request.body, {new: true}, function(err, indicator) {
        if (err) res.send(err);

        response.json(indicator);
    })
};

exports.deleteIndicator = function(request, response) {
    Indicators.remove( {_id: {sensorId: request.params.sensorId, indicatorId: request.params.indicatorId}}, function(err, indicator) {
        if (err) res.send(err);

        response.json({ message: 'Indicator succesfully deleted'});
    });
};
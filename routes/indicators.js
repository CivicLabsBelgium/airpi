'use strict';

module.exports = function(app) {
    var controller = require('../controllers/indicators');

    app.route('/v1/sensors/:sensorId/indicators/:indicatorId')
        .get(controller.readIndicator)
        .post(controller.createIndicator)
        .put(controller.updateIndicator)
        .delete(controller.deleteIndicator)
    ;
};
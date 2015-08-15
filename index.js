'use strict';

var WebSocket = require('ws');

module.exports = function(callback) {

    var websocket = new WebSocket('wss://www.bitmex.com/realtime');

    websocket.on('open', function() {
        callback(websocket)
    });

};


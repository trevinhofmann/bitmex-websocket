# bitmex-websocket

[![NPM Package](https://img.shields.io/npm/v/bitmex-websocket.svg?style=flat-square)](https://www.npmjs.org/package/bitmex-websocket)
[![Dev Dependencies](https://img.shields.io/david/thofmann/bitmex-websocket.svg?style=flat-square)](https://www.npmjs.org/package/bitmex-websocket)

An unofficial node.js wrapper for the BitMEX Bitcoin derivatives exchange websocket API

Official BitMEX website: [https://www.bitmex.com](https://www.bitmex.com)

## Getting Started

Installation:

```
npm install bitmex-websocket --save
```

Usage:

```javascript
var WebSocket = require('bitmex-websocket');

WebSocket(function(websocket) {

    console.log('Asking for help.');
    websocket.send('"help"');

    websocket.on('message', function(message) {
        console.log('Message received:');
        console.log(message);
    });

});
```

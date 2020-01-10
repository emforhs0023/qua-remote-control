const mqtt = require('mqtt');
const mysql = require('mysql');
const config = require('../config');



client.subscribe('/topic/aqua');

client.on('connect', function() {
    console.log('mqtt connect');
});

client.on('message', function(topic, message) {
    
    
    let msg = JSON.parse(message.toString());

    console.log(msg)
});


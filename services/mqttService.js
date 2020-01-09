const mqtt = require('mqtt');
const mysql = require('mysql');
const config = require('../config');

const client = mqtt.connect('mqtt://1.234.51.99:5556', {
    // username: 'fsrnt',
    // password: '75657565'
});

client.subscribe('/topic/aqua');

client.on('connect', function() {
    console.log('mqtt connect');
});

client.on('message', function(topic, message) {
    
    
    let msg = JSON.parse(message.toString());

    console.log(msg)
});


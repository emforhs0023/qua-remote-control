var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://1.234.51.99:5556', {
	// username:"fsrnt",
	// password:"75657565"
});

client.on("connect", function() {
	console.log("mqtt connect")
});

module.exports.start = function(header, uid, action, part, timestart, timestop){
	
	
	
	client.publish("/topic/aqua", `{"header":"${header}", "uid":"${uid}", "sub":{"action":"${action}", "part":"${part}"}, "timealarm":{"timestart":"${timestart}", "timestop":"${timestop}"}, "continue":""}`)
	
	
}



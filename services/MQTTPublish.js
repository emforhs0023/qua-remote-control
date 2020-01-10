var mqtt = require("mqtt");

client.on("connect", function() {
	console.log("mqtt connect")
});

module.exports.start = function(header, uid, action, part, timestart, timestop){
	
	
	
	client.publish("/topic/aqua", `{"header":"${header}", "uid":"${uid}", "sub":{"action":"${action}", "part":"${part}"}, "timealarm":{"timestart":"${timestart}", "timestop":"${timestop}"}, "continue":""}`)
	
	
}



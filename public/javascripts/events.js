/*

		get events

*/

var events = [
	{id: 1, name:"Happy Hour Monday!", date: new Date(), description: "Let's get together and hang out like the good old days!"},
	{id: 2, name:"Satyan's Birthday", date: new Date(), description: "It's my birthday and I'll party if I want to!"},
	{id: 3, name:"Xmas White Elephant", date: new Date(), description: "No Shake weights or Icings allowed."}
]

exports.eventList = function() {
	return events;
}

exports.getEvent = function(id) {
	for(var i = 0; i < events.length; i++) {
		if (events[i].id == id) { return events[i];}
	}
 }

 exports.newEvent = function(params) {
 	var newEv = {id: events.length+1, name: params.name, date: new Date(), description: params.description}
 	events.push(newEv);
 	return newEv;
 }
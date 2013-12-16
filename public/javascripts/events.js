/*

		get events

*/

var events = [
	{id: 1, name:"Happy Hour Monday!", date: new Date(), description: "Let's get together and hang out like the good old days!", venues:
	[
		{id: 1, name: 'Redford', address: 'Tenderloin area', owner: 'Dexter'},
		{id: 2, name: 'Giordano', address: 'Mission area', owner: 'Satyan'}
	]

	},
	{id: 2, name:"Satyan's Birthday", date: new Date(), description: "It's my birthday and I'll party if I want to!", venues: []},
	{id: 3, name:"Xmas White Elephant", date: new Date(), description: "No Shake weights or Icings allowed.", venues: []}
]

function getEvent(id) {
		for(var i = 0; i < events.length; i++) {
		if (events[i].id == id) { return events[i];}
	}
	return false;
 }

exports.eventList = function() {
	return events;
}

exports.getEvent = getEvent;


 exports.newEvent = function(params) {
 	var newEv = {id: events.length+1, name: params.name, date: new Date(), description: params.description, venues: []}
 	events.push(newEv);
 	return newEv;
 }

 exports.addVenue = function(params) {
 	var event = getEvent(params.event_id);
 	var venues = event.venues;
 	var newVenue = {id: venues.length, name: params.name, address: params.address, owner: params.owner};
 	venues.push(newVenue);

 	return newVenue;
 }

/*
 * GET home page.
 */

 var events = require('../public/javascripts/events');

exports.index = function(req, res){
  res.render('index', { title: 'VenuePickr', events: events.eventList() });
};


/*
 * GET event page.
 */

exports.show = function(req, res){
  var ev = events.getEvent(req.params.id);
  res.render('show', { title: 'VenuePickr', event: ev });
  console.log(res);
};

/*
 * POST event
 */

exports.create = function(req, res){
	console.log(req);
  var ev = events.newEvent({name: req.body.name, description: req.body.description});
  res.render('show', { title: 'VenuePickr', event: ev });
};
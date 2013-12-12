
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
};
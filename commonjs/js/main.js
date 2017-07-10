var Meetup = require('./meetup');

var angularMeetup = new Meetup('angular');

var getContainer = function () {
  return document.getElementById('container');
}

var displayAttendees = function (attendees) {
  attendees.forEach(function (attendee) {
    let node = document.createElement('li');
    node.innerHTML = attendee;
    getContainer().appendChild(node);
  });
}

var attendees = angularMeetup.getAttendees();

displayAttendees(attendees);

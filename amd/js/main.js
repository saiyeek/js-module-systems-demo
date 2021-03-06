define(['meetup'], function (Meetup) {
  var angularMeetup = new Meetup('angular');

  function getContainer() {
    return document.getElementById('container');
  }

  function displayAttendees(attendees) {
    attendees.forEach(function (attendee) {
      let node = document.createElement('li');
      node.innerHTML = attendee;
      getContainer().appendChild(node);
    });
  }

  var attendees = angularMeetup.getAttendees();

  displayAttendees(attendees);
});

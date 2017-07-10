var MeetupApp = MeetupApp || {};

MeetupApp.angularMeetup = new MeetupApp.Meetup('angular');

MeetupApp.getContainer = function () {
  return document.getElementById('container');
}

MeetupApp.displayAttendees = function (attendees) {
  attendees.forEach(function (attendee) {
    let node = document.createElement('li');
    node.innerHTML = attendee;
    MeetupApp.getContainer().appendChild(node);
  });
}



MeetupApp.displayAttendees(MeetupApp.angularMeetup.getAttendees());

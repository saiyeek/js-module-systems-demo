import Meetup from './meetup.js';

const angularMeetup = new Meetup('angular');

const getContainer = () => document.getElementById('container');

const displayAttendees = (attendees) => {
  attendees.forEach(attendee => {
    let node = document.createElement('li');
    node.innerHTML = attendee;
    getContainer().appendChild(node);
  });
}
let attendees = angularMeetup.getAttendees();

displayAttendees(attendees);

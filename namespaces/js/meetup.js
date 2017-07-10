var MeetupApp = MeetupApp || {};

MeetupApp.Meetup = function (name) {
  this.name = name;
}

MeetupApp.Meetup.prototype.getName = function () {
  return this.name;
}

MeetupApp.Meetup.prototype.getAttendees = function () {
  return MeetupApp.datastore[this.name] ? MeetupApp.datastore[this.name].attendees: [];
}

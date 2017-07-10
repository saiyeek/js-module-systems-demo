function Meetup (name) {
  this.name = name;
}

Meetup.prototype.getName = function () {
  return this.name;
}

Meetup.prototype.getAttendees = function () {
  return datastore[this.name] ? datastore[this.name].attendees: [];
}

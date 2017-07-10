define(['datastore'], function (data) {
  function Meetup (name) {
    this.name = name;
  }

  Meetup.prototype.getName = function () {
    return this.name;
  }

  Meetup.prototype.getAttendees = function () {
    return data[this.name] ? data[this.name].attendees: [];
  }

  return Meetup;
});

(function (app) {
  function Meetup (name) {
    this.name = name;
  }

  Meetup.prototype.getName = function () {
    return this.name;
  }

  Meetup.prototype.getAttendees = function () {
    return app.data[this.name] ? app.data[this.name].attendees: [];
  }

  app.Meetup = Meetup;
})(MeetupApp);

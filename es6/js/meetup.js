import data from './datastore.js';

class Meetup {
  constructor (name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getAttendees() {
    return data[this.name] ? data[this.name].attendees : [];
  }
}

export default Meetup;

const employee = require('./employee');

class intern extends employee {
  constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(this.school);
    return this.school;
  }

  getRole() {
    return 'intern';
  }
}

module.exports = intern;

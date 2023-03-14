const employee = require('./employee');

class manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }

  getRole() {
    return 'manager';
  }
}

module.exports = manager;
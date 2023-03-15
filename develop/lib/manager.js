const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }

  getRole() {
    return 'mMnager';
  }
}

module.exports = Manager;
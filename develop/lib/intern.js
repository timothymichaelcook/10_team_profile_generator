// Declare Employee variable, assign to employee module with require method
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(this.school);
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
// Exporting Intern class
module.exports = Intern;

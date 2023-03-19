// Defining Employee class with name, id, email constructors
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        console.log(this.email);
        return this.email;
    }
    getRole() {
        return "Employee";
    }
 
  }

  // Exporting employee class
  module.exports = Employee;
  
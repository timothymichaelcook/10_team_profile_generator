class employee {
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
    console.log(this.id)
    return this.name;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  getRole() {
    return 'employee';
  }
}

module.exports = employee;
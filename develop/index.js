const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const teamMembers = [];

// initial by asking addManager questions
function init() {
  addManager().then(addEmployee);
}

// generate HTML by using render functions
function generateHTML() {
  let html = render(teamMembers);
  // console.log(html);

  // check if output directory exist, if not, create a new directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, html, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// adking if the user wants to add more team members
function addEmployee() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team members would you like to add?",
        name: "addEmployee",
        choices: ["Engineer", "Intern", "I don't want to add anymore members."],
      },
    ])
    .then(function (response) {
      if (response.addEmployee === "Engineer") {
        addEngineer().then(addEmployee);
      } else if (response.addEmployee === "Intern") {
        addIntern().then(addEmployee);
      } else {
        generateHTML();
      }
    });
}

// create functions for manager
function addManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the manager's id?",
        name: "managerId",
        validate: function (val) {
          if (isNaN(val)) {
            return "ID should be a number.";
          } else if (teamMembers.some((teamMember) => teamMember.id === val)) {
            return "This ID is already taken. Please enter a different number.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
        validate: function (val) {
          if (isNaN(val)) {
            return "Office number should be a number.";
          }
          return true;
        },
      },
    ])

    .then(function (response) {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNumber
      );
      teamMembers.push(manager);
      // console.log(teamMembers);
    });
}

init();

// create functions for engineer
function addEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId",
        validate: function (val) {
          if (isNaN(val)) {
            return "ID should be a number.";
          } else if (teamMembers.some((teamMember) => teamMember.id === val)) {
            return "This ID is already taken. Please enter a different number.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the engineer's github?",
        name: "engineerGithub",
        validate: (val) => val.length > 2,
      },
    ])

    .then(function (response) {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGithub
      );
      teamMembers.push(engineer);
      // console.log(teamMembers);
    });
}

// create functions for intern
function addIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "internId",
        validate: function (val) {
          if (isNaN(val)) {
            return "ID should be a number.";
          } else if (teamMembers.some((teamMember) => teamMember.id === val)) {
            return "This ID is already taken. Please enter a different number.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
        validate: (val) => val.length > 2,
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
        validate: (val) => val.length > 2,
      },
    ])

    .then(function (response) {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      teamMembers.push(intern);
      // console.log(teamMembers);
    });
}

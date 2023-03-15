/*
GLOBAL VARIABLES SECTION
*/

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');
const Choices = require('inquirer/lib/objects/choices')
const teamMembers = [];

/*
FUNCTIONS SECTION
*/

function init() {
  addManager().then(addEmployee);
}

function generateHTML() {
  let html = render(teamMembers);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, html, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

function addEmployee() {
  return inquirer
  .prompt([
    {
      type: 'list',
      message: 'What team would you like to add this employee to?',
      name: 'addEmployee',
      choices: ['Engineer', 'Inter', 'I don\'t want to add anymore members.']
    }
  ]).then(function (response) {
    if (response.addEmployee === 'Engineer') {
      addEngineer().then(addEmployee);
    } else if (response.addEmployee === 'Intern') {
      addIntern().then(addEmployee);
    } else {
      generateHTML();
    }
  });
}

function addManager() {
  return inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the manager\'s name.',
      name: 'managerName',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the manager\'s id.',
      name: 'managerId',
      validate: function(val) {
        if (isNaN(val)) {
          return 'Please enter a number.';
        } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
          return 'This ID has already been used, please enter a new ID.'
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Please enter the manager\'s email.',
      name: 'managerEmail',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the manager\'s office number.',
      name: 'officeNumber',
      validate: function(val) {
        if (isNaN(val)) {
          return 'Please enter a number.';
        }
        return true;
      }
    },
  ])

  .then(function (response) {
    const manager = new manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
    teamMembers.push(manager);
  });
}

//Call init function
init();

function addEngineer() {
  return inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the engineer\'s name.',
      name: 'engineerName',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the engineer\'s id.',
      name: 'engineerId',
      validate: function(val) {
        if (isNaN(val)) {
          return 'Please enter a number.';
        } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
          return 'This ID has already been used, please enter a new ID.'
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Please enter the engineer\'s email.',
      name: 'engineerEmail',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the engineer\'s GitHub username.',
      name: 'engineerGitHub',
      validate: val => val.length > 2,
    },
  ])

  .then(function (response) {
    const engineer = new engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
    teamMembers.push(engineer);
  });
}


function addIntern() {
  return inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the intern\'s name.',
      name: 'internName',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s id.',
      name: 'internId',
      validate: function(val) {
        if (isNaN(val)) {
          return 'Please enter a number.';
        } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
          return 'This ID has already been used, please enter a new ID.'
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s email.',
      name: 'internEmail',
      validate: val => val.length > 2,
    },
    {
      type: 'input',
      message: 'Please enter the intern\'s school.',
      name: 'internSchool',
      validate: val => val.length > 2,
    },
  ])

  .then(function (response) {
    const intern = new intern(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
    teamMembers.push(intern);
  });
}





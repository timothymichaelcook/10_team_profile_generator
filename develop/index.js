/*
GLOBAL VARIABLES SECTION
*/

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const manager = require('./lib/manager');
const OUTPUT_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const teamMembers = [];

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
      choices: []
    }
  ]).then(function (response) {
    if (response.addEmployee === 'engineer') {
      addEngineer().then(addEmployee);
    } else if (response.addEmployee === 'intern') {
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





/*
FUNCTIONS SECTION
*/
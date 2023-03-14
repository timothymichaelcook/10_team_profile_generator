/*
GLOBAL VARIABLES SECTION
*/

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
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






/*
FUNCTIONS SECTION
*/
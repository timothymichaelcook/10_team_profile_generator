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








/*
FUNCTIONS SECTION
*/
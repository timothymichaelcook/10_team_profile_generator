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








/*
FUNCTIONS SECTION
*/
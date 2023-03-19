const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const teamMembers = [];

// initial by asking addManager questions 
function init() {
    addManager().then(addEmployee);;
}

// generate HTML by using render functions
function generateHTML() {
    let html = render(teamMembers);
    // console.log(html);

    // check if output directory exist, if not, create a new directory
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, html, function(err) {
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
            type:"list", 
            message: "Which type of team members would you like to add?",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "I don't want to add anymore members." ]
        }  
    ]).then(function (response) {
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
                validate: val => val.length > 2, 

            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "managerId",
                validate: function(val) {
                    if (isNaN(val)) {
                        return "ID should be a number.";
                    } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
                        return "This ID is already taken. Please enter a different number."
                    } 
                    return true;
                }
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail",
                validate: val => val.length > 2,   

            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
                validate: function(val) {
                    if (isNaN(val)) {
                        return "Office number should be a number.";
                    }                     
                    return true;
                }
                
            },
        ])

        .then(function (response) {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
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
                validate: val => val.length > 2, 

            },
            {
                type: "input",
                message: "What is the engineer's id?",
                name: "engineerId",
                validate: function(val) {
                    if (isNaN(val)) {
                        return "ID should be a number.";
                    } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
                        return "This ID is already taken. Please enter a different number."
                    } 
                    return true;
                }

            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail",
                validate: val => val.length > 2, 

            },
            {
                type: "input",
                message: "What is the engineer's github?",
                name: "engineerGithub",
                validate: val => val.length > 2, 

            },
        ])

        .then(function (response) {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
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
                validate: val => val.length > 2, 

            },
            {
                type: "input",
                message: "What is the intern's id?",
                name: "internId",
                validate: function(val) {
                    if (isNaN(val)) {
                        return "ID should be a number.";
                    } else if (teamMembers.some(teamMember => (teamMember.id === val))) {
                        return "This ID is already taken. Please enter a different number."
                    } 
                    return true;
                }
            
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail",
                validate: val => val.length > 2, 

            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool",
                validate: val => val.length > 2, 

            },
        ])

        .then(function (response) {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamMembers.push(intern);
            // console.log(teamMembers);
        });

}

// create function for employee to wrap 

// valiate function to ensure ID is unique


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


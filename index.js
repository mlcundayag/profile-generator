//import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html")

const generateHTML = require('./src/generateHTML.js')
const outputSuccessText = (text) => console.log(`\x1b[32m${text}\x1b[0m`);
const outputErrorText = (text) => console.log(`\x1b[31m${text}\x1b[0m`);

const teamMembers = []

console.log("Welcome to team generator")
console.log("-------------------------")


//generate HTML to be isolated

//inquiry for team info
const managerInfo = () => {
    return inquirer
        .prompt([
            //manager Name
            {
                type: "input",
                name: "managerName",
                message: "Please enter team manager's name:",
                validate: function (name) {
                    if (name) {
                        return true;
                    } else {
                        outputErrorText("Please enter manager's name!...")
                    }
                }

            },
            //manager ID
            {
                type: "input",
                name: "managerID",
                message: "What is their ID number?",
                validate: function (name) {
                    if (isNaN(name) || (!name)) {
                        outputErrorText("Please enter manager's ID number!...")
                    } else {
                        return true
                    }
                }
            },
            //Manager Email
            {
                type: "input",
                name: "managerEmail",
                message: "What is their email address?",
                validate: function (email) {
                    validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
                    if (validEmail) {
                        return true;
                    } else {
                        outputErrorText("Please enter a valid email address...")
                    }
                }
            },
            //Manager's office number
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number",
                validate: function (name) {
                    if (isNaN(name) || (!name)) {
                        outputErrorText("Please enter an office number...")
                    } else {
                        return true
                    }
                }
            }
        ])
        .then((data) => {
            const manager = new Manager(
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.officeNumber
            )
            console.log(manager);
            teamMembers.push(manager);
            mainMenu()
        })
};

//mainMenu to quit or add
const mainMenu = () => {
    return inquirer
        .prompt([
            {
                type: "confirm",
                name: "mainMenu",
                message: "Do you want to add a team member?",
                default: true
            }
        ])
        .then(userChoice => {
            if (userChoice.mainMenu === true) {
                console.log("Adding a Team Member");
                console.log("-------------------")
                addMembers()
            } else {
                buildTeam();
            }
        })
}



//menu to add more members
const addMembers = () => {
    return inquirer
        .prompt([{
            type: "list",
            name: "position",
            message: "Please choose position:",
            choices: ["Engineer", "Intern"]
        }])
        .then((data) => {
            if (data.position === "Engineer") {
                addEngineer()
            } else {
                addIntern()
            }
        })
}

//adding engineer
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is their name?",
                validate: function (name) {
                    if (name) {
                        return true;
                    } else {
                        outputErrorText("Please enter team member's name!...")
                    }
                }
            },
            //team member's ID number
            {
                type: "input",
                name: "engineerID",
                message: "What is their ID number?",
                validate: function (name) {
                    if (isNaN(name) || (!name)) {
                        outputErrorText("Please enter member's ID number!...")
                    } else {
                        return true
                    }
                }
            },
            //mmember's email address
            {
                type: "input",
                name: "engineerEmail",
                message: "What is their email address?",
                validate: function (email) {
                    validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
                    if (validEmail) {
                        return true;
                    } else {
                        outputErrorText("Please enter a valid email address...")
                    }
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is their gitHub username?",
                validate: function (name) {
                    if (name) {
                        return true;
                    } else {
                        outputErrorText("Please enter team member's github username!...")
                    }
                }
            }
        ])
        .then(data => {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGitHub,
            )
            console.log(engineer);
            teamMembers.push(engineer);
            mainMenu()
        })
}

//adding intern
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is their name?",
                validate: function (name) {
                    if (name) {
                        return true;
                    } else {
                        outputErrorText("Please enter team member's name!...")
                    }
                }
            },
            //team member's ID number
            {
                type: "input",
                name: "internID",
                message: "What is their ID number?",
                validate: function (name) {
                    if (isNaN(name) || (!name)) {
                        outputErrorText("Please enter member's ID number!...")
                    } else {
                        return true
                    }
                }
            },
            //mmember's email address
            {
                type: "input",
                name: "internEmail",
                message: "What is their email address?",
                validate: function (email) {
                    validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
                    if (validEmail) {
                        return true;
                    } else {
                        outputErrorText("Please enter a valid email address...")
                    }
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is their school name?",
                validate: function (name) {
                    if (name) {
                        return true;
                    } else {
                        outputErrorText("Please enter team member's school!...")
                    }
                }
            }
        ])
        .then(data => {
            const intern = new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool,
            )
            console.log(intern);
            teamMembers.push(intern);
            mainMenu()
        })
}


const buildTeam = () => {
    outputSuccessText("Success!\nYour team profile has been created!")
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHTML(teamMembers), "utf-8")
}

managerInfo()

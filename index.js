const inquirer = require('inquirer')
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js')
// const { validate } = require('@babel/types');

const outputSuccessText = (text) => console.log(`\x1b[32m${text}\x1b[0m`);
const outputErrorText = (text) => console.log(`\x1b[31m${text}\x1b[0m`);


//data = temporary variable


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
            //Employee ID
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
            },
            //main menu to add members to leave
            {
                type: "confirm",
                name: "mainMenu",
                message: "Do you want to add a team member?",
                default: true
            }
        ])
        .then(() => {
            mainMenu()
        })
};

//mainMenu to quit or add
const mainMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "confirm",
            name: "mainMenu",
            message: "Do you want to add a team member?",
            default: true
        }
    ])
    .then((data) => {
        const htmlPageContent = generateHTML(data);
        data.mainMenu ? addMembers() : writeFile(htmlPageContent)
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
        },
        //team member's ID number
        {
            type: "input",
            name: "memberID",
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
            name: "memberEmail",
            message: "What is their email address?",
            validate: function (email) {
                validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
                if (validEmail) {
                    return true;
                } else {
                    outputErrorText("Please enter a valid email address...")
                }
            }
        }
        ])
        //adding member's info
        .then((data) => {
            let memberInfo = "";
            if (data.position === "Engineer") {
                memberInfo = "GitHub username"
            } else {
                memberInfo = "school's name"
            }
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "memberInfo",
                        message: `What is their ${memberInfo}`,
                    }
                ])
                .then(() => {
                    mainMenu()
                })
        })
}


const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return
        } else {
            outputSuccessText("Succes!\nYour team profile has been created!")
        }
    })
}


const init = () => {
    managerInfo()
        .then(input => {
            return generateHTML(input);
        })
        .catch(err => {
            console.log(err)
        })
}

init()




    //to do
    //inquirer: managers name, employee id, email address, office number
    //then menu
    //1. engineer/intern/finish
    //if engineer - name, ID, email, GitHub username, back to menu
    //if intern - name, ID, email, school, back to menu
    //if done
    //exit application and html is generated

    //mailto email
    //Github open to new tab
const inquirer = require('inquirer')
const fs = require('fs');
const { validate } = require('@babel/types');

const outputErrorText = (text) => console.log(`\x1b[31m${text}\x1b[0m`);

//data = temporary variable


//generate HTML to be isolated
const generateHTML = ({ data }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar bg-dark" id="navbar">
                <h1 class="h1 w-100 text-center text-light p-4" id="navbar-text">Team Profile</h1>
            </nav>
        </header>
    
        <main>
            <div class="jumbotron jumbotron-fluid">
                <div class="row justify-content-center mx-5">
                    <div class="card col-3 text-bg-secondary">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
    
                    <div class="card col-3 text-bg-secondary mx-5">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
    
                    <div class="card col-3 text-bg-secondary">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    </body>
    </html>`;

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
        ])
};


//main menu to say yes or no 
const mainMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "confirm",
            name: "optionToGoBack",
            message: "Do you want to add a team member?",
            default: true
        }
    ])
    .then((data) => {
        data.optionToGoBack ? addMembers() : outputErrorText("I'm done!")
    })
}

//menu to add more members
const addMembers = () => {
    return inquirer
    .prompt ([{
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
    },
    {
        type: "confirm",
        name: "option",
        message: "Do you want to add more team members?",
        default: true
    },
    ])
    .then((data) => {
        data.option ? addMembers() : outputErrorText("I'm done!")
    })
}

addMembers()



// managerInfo()
// .then(mainMenu)





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
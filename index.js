// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require("fs");
const questions = [];
const generateMarkdown = require("./utils/generateMarkdown")
//const utils = require("./utils")
// TODO: Create an array of questions for user input
inquirer.prompt([
    {           
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
    },
    {                     
    type: 'input',
    message: 'What is the description of your project?',
    name: 'projectDescription',
    },
    {           
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'projectInstall',
    },
    {           
    type: 'input',
    message: 'What is the usage information?',
    name: 'projectUsage',
    },
    {           
    type: 'input',
    message: 'Were there any contributors?',
    name: 'projectCredits',
    },
    {
    type: 'input',
    message: 'What tests were used?',
    name: 'projectTest',
    },
    {
    type: 'input',
    message: 'What is an appropriate license for this project?',
    name: 'projectLicense',
    }
 ])
 .then((response) => {
    console.log(response)
    // TODO: Create a function to write README file
     fs.writeFile("README.md", `${generateMarkdown(response)}` , err => {
         if (err) console.error(err);
         console.log("README successful!")
     });
});


//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

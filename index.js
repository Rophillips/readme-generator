// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [];

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
    name: 'usageInfo',
    },
    {           
    type: 'input',
    message: 'What were the contributing guidelines?',
    name: 'contribInfo',
    },
    {
    type: 'input',
    message: 'What tests were used?',
    name: 'testInfo',
    },
    {
    type: 'input',
    message: 'What is an appropriate license for this project?',
    name: 'projectLicense',
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

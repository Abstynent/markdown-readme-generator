// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        name: 'initCMD',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'testCMD',
        message: 'What command should be run to run tests?',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contrubuting to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README.md created.")
    );
}

// TODO: Create a function to initialize app
function init() {
    prompt([...questions]).then((data) => {
        writeToFile(fileName, generateMarkdown(data));
    })
};

// Function call to initialize app
init();

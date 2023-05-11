// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

];

inquirer.prompt([
    {
        type: 'input',
        message: 'first test this will be a question',
        name: 'username',
    }
]).then((response) => console.log('first test correct!'));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

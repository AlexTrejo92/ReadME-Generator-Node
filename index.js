// TODO: Include packages needed for this application. DONE
const fs = require('fs');
const inquirer = require('inquirer');

// This is an array of questions for user input to be used by the inquirer.prompt method.
const questions = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Write a brief description of your Project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT' , 'Apache 2.0', 'BSD 2', 'CC Zero'],
    },
    {
        type: 'input',
        name: 'icommand',
        message: 'What command should be run to install dependencies?',
        default() {
            return 'npm i';
        },
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }
];

inquirer.prompt(questions).then((response) => {
    console.log('first test correct!');
    console.log(response);
    console.log(response.projectname);
    const fileName = 'ReadMeFile.md'
    fs.writeFile(fileName, JSON.stringify(generateReadMe), (err) => err ? console.log(err) : console.log('Successfully created readme for your project!'));
    writeToFile(response);
});

// TODO: Create a function to write README file
function writeToFile(response) {
    console.log(response)
    let fileName = 'READMEFile.md'

    // const generateReadMe = ({ projectname, description, license, username, email, icommand, contributing }) => 
    const generateReadMe = (response) => 
    `# ${response.projectname}
    
    ## Description

    ${description}
    
    ## Table of contents

    - [Installation] (#installation)
    - [Usage] (#usage)
    - [License] (#license)
    - [Contributing] (#installation)
    - [Installation] (#installation)
    - [Installation] (#installation)

    ## Installation

    To install necessary dependencies, run the following command:

    ${icommand}


    `;



}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

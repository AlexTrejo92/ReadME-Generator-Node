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
        name: 'installcommand',
        message: 'What command should be run to install dependencies?',
        default() {
            return 'npm i';
        },
    },
    {
        type: 'input',
        name: 'testcommand',
        message: 'What command should be run to run tests?',
        default() {
            return 'npm test';
        },
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }
];


// TODO: Create a function to write README file
function writeToFile(response) {
    let fileName = 'READMEFile.md';
const readMeContent = 
`# ${response.projectname}



## Description
    
${response.description}

## Table of contents

* [Installation] (#installation)
* [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)

## Installation
To install necessary dependencies, run the following command:
${response.installcommand}

## Usage
${response.usage}

## License
This project is licensed under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
To run tests, run the following command:
${response.testcommand}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.username}](https://github.com/${response.username}).

`;
// fs.writeFile(fileName, JSON.stringify(readMeContent, null, '\n'), (err) => err ? console.log(err) : console.log('Successfully created readme for your project!'));
fs.writeFile(fileName, readMeContent, (err) => err ? console.log(err) : console.log('Successfully created readme for your project!'));
}
// TODO: Create a function to initialize app
function init() {
    
inquirer.prompt(questions).then((response) => {
    console.log(response);    
        writeToFile(response);
});
}

// Function call to initialize app
init();

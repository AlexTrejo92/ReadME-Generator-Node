// This code includes packages needed for this application.
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
        choices: ['MIT' , 'Apache_2.0', 'BSD_2', 'CC_Zero', 'None'],
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


// This function creates the readme file using fs with the input the user wrote using inquirer.
function writeToFile(response) {
    let fileName = './DEST/READMEFile.md';
const readMeContent = 
`# ${response.projectname}

${renderLicense(response.license)}


## Description

${response.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${response.installcommand}
\`\`\`

## Usage
${response.usage}

${showLicenseSection(response.license)}

## Contributing
${response.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${response.testcommand}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.username}](https://github.com/${response.username}).

`;

fs.writeFile(fileName, readMeContent, (err) => err ? console.log(err) : console.log('Successfully created readme for your project!'));
}
// Function to initialize app
function init() {
    
inquirer.prompt(questions).then((response) => {
        writeToFile(response);
});
}

// This function checks if the user chose a license an prints a badge with the name of that license.
function renderLicense (license) {
    if (license == 'None') {
        return ''
    } else {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
}
// This function was created to show or hide the License section of the readme, depending if the user chose or not a license for their project.
function showLicenseSection (license) {
    if (license == 'None') {
        return ''
    } else {
return `## License
This project is licensed under the ${license} license.`

    }
    }

// Function call to initialize app
init();

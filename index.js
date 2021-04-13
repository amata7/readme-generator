// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'How would you describe what your project is?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How should someone install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How should someone use your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How should someone contribute to this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'How does someone test this project?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What type of license does your project have?',
            name: 'license',
            choices: ['MIT' , 'Apache' , 'Artistic License 2.0' , 'Affero GPL' , 'LGPL v3' , 'Mozilla Public License' , 'Public Domain']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        
    ])
    .then((answers) =>{     
        const filename = 'NewREADME.md'
        
        const readMe = 
`# ${answers.title}

## Description
The following section describes what this project does:
${answers.description}

## Install
The following section describes how to install this project:
    .${answers.install}

## Usage
The following section describes how to use this project:
    ${answers.usage}

## Contribute
The following section describes how to contribute to this project:
    ${answers.contribute}

## Test
The following section describes how to test this project:
    ${answers.test}

## License
The selected license for this project is:
    ${answers.license}

## Contact
The Github profile of the person who created this project is : https://github.com/${answers.github}
Any other questions or information can be sent to ${answers.email}
` ;

        fs.writeFile(filename, readMe, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

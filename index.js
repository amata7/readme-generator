// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

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
        
    ])
    .then((answers) =>{     
        const filename = 'newREADME.md'
        
        const readMe = 
`# ${answers.title}

## Description
Every good README has a descritpion of what goal the project accomplishes. The following section describes what this project does:
> ${answers.description}

## Table of Contents 

[Installation](#install) | [Usage](#usage)\n

[Contribute](#contribute) | [Test](#test) | [License](#license)\n

## Install
Sometimes the steps to get a project working can be confusing so it is important to give instructions on how to install your project. The following section describes this process:

> ${answers.install}

## Usage
Since there could be several ways to input information into a project, it is important to state how it should be used. The following section describes how to use this project:
> ${answers.usage}

## Contribute
Code is never really finished being added to, and this addition could come from developers other than the original creator. The following section describes how to contribute to this project:
> ${answers.contribute}

## Test
A person using this project might want to know what the tests are and how they are used to better understand it's functionality.The following section describes how to test this project:
> ${answers.test}

## License
Every project needs a license to state how the code inside can be used and modified. The selected license for this project is:
> ${answers.license}

## Other Information
The Github profile of the person who created this project is : https://github.com/${answers.github}
` ;

        fs.writeFile(filename, readMe, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

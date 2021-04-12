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
        
        const readMe = `# ${answers.title}
        
        ## Description
    
        ${answers.description}
        
        ## Install
        
        * ${answers.install}-
        
        ## Usage
        
        * ${answers.usage}
        
        ## Contribute
        
        * ${answers.contribute}

        ## Test
        
        * ${answers.test}

        ## License
        
        * ${answers.license}

        ## Github
        
        * ${answers.github}

        ## Email
        
        * ${answers.email}
        ` ;

        fs.writeFile(filename, readMe, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

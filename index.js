const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "How would you describe what your project is?",
      name: "description",
    },
    {
      type: "input",
      message: "How should someone install your project?",
      name: "install",
    },
    {
      type: "input",
      message: "How should someone use your project?",
      name: "usage",
    },
    {
      type: "input",
      message: "How should someone contribute to this project?",
      name: "contribute",
    },
    {
      type: "input",
      message: "How does someone test this project?",
      name: "test",
    },
    {
      type: "list",
      message: "What type of license does your project have?",
      name: "license",
      choices: ["MIT License", "Apache License", "Mozilla Public License"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((answers) => {
    if (answers.license === "Mozilla Public License") {
      answers.badge = "Mozilla%20Public%20License";
    }
    if (answers.license === "Apache License") {
      answers.badge = "Apache%20License";
    }
    if (answers.license === "MIT License") {
      answers.badge = "MIT%20License";
    }
    const filename = "newREADME.md";

    const readMe = `# ${answers.title}

![GitHub](https://img.shields.io/static/v1?label=license&message=${answers.badge}&color=blue&logo=github)

## Description


${answers.description}

## Table of Contents 

[Installation](#install) | [Usage](#usage)\n

[Contribute](#contribute) | [Test](#test) | [License](#license)\n
\n
\n

## Installation Instructions

${answers.install}

## How to Use This Project

${answers.usage}

## Contribute to Future Development

${answers.contribute}

## Testing Instructions

${answers.test}

## License

This project is licensed with the ${answers.license}

## Other Information

Github: https://github.com/${answers.github}

Email: ${answers.email}
`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });

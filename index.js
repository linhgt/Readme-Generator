var fs = require('fs');
var inquirer = require('inquirer');
var outdent = require('outdent');       //remove indentation from ES6 template literals

const prompt = () =>{
    //Prompt the user
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of the project?"
        },
        {
            type:"input",
            name:"description",
            message:"Provide a description"
        },
        {
            type:"input",
            name:"installation",
            message:"provide instructions on how to install"
        },
        {
            type:"input",
            name:"usage",
            message:"Provide some details on how to use the app"
        },
        {
            type:"input",
            name:"contribution",
            message:"Provide some guidelines on how to contribute to the project"
        },
        {
            type:"input",
            name:"test",
            message:"How to do testing?"
        },
        {
            type:"list",
            name:"license",
            message:"What is the license used in this project?",
            choices:["MIT", "ISC", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type:"input",
            name:"description",
            message:"Provide a short description"
        },
        {
            type:"input",
            name:"username",
            message:"Enter your Github username"
        },
        {
            type:"input",
            name:"email",
            message:"Enter your email address"
        }
    ]).then((answers) => {
        //store the texts in a template string then write it to README.md
        const finalDraft = outdent({trimTrailingNewLine: false})`
        # ${answers.title}
        ![Github license](https://img.shields.io/badge/License-${answers.license}-blue.svg)

        ## Description

        ${answers.description}

        ## Table of Contents

        * [Installation](#installation)
    
        * [Usage](#usage)

        * [License](#license)

        * [Contributing](#contributing)

        * [Tests](#tests)

        * [Questions](#questions)

        ## Installation

        ${answers.installation}

        ## Usage

        ${answers.usage}

        ## Contributing

        ${answers.contribution}

        ## Tests

        ${answers.test}

        ## License

        ${answers.license}

        ## Questions

        Have any questions? Contact me at:
        https://github/${answers.username}
        ${answers.email}
        `;

        fs.writeFile("README.md", finalDraft, (err) => {
            if (err) console.log(err);
        });
    });
};

prompt();
/*fs.writeFile("README.md", "testing", err => {
    if(err) console.log(err);
});*/
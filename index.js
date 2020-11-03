var fs = require('fs');
var inquirer = require('inquirer');

const prompt = () =>{
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
        console.log(answers);

        fs.writeFile("README.md", answers, (err) => {
            if (err) console.log(err);
        });
    });
};

prompt();
/*fs.writeFile("README.md", "testing", err => {
    if(err) console.log(err);
});*/
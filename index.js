import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter the description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps to install your project? Provide a step-by-step description of how to get the development environment running',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who else contributed to this project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please provide a test and explain how to run it.',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Please select a license',
            name: 'license',
            choices: ['MIT', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            message: 'What are some features of the project?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'git',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);

        writeFile('./output/README.md', markdownContent);
    });
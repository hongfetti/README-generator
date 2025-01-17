// TODO: Include packages needed for this application
import inquirer from 'inquirer'

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', process.argv[2], (err) =>
        err ? console.error(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt({
            type: 'input',
            message: '',
            name: '',
        })

}

// Function call to initialize app
init();

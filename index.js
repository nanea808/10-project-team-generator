const inquirer = require('inquirer');
const fs = require('fs');
const { Employee, Intern } = require('./lib/employee.js');

const intern = new Intern('Ethan', '1', 'willers.enw@gmail.com', 'UofO');

console.log(intern.getRole());
console.log(intern.getName());

// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'Enter Project Title:'
//     },
//     {
//         type: 'input',
//         message: 'Enter Project Description:',
//         name: 'description'
//     },
//     {
//         type: 'editor',
//         name: 'install',
//         message: 'Enter Installation Instructions:'
//     },
//     {
//         type: 'editor',
//         name: 'usage',
//         message: 'Enter Usage Instructions:'
//     },
//     {
//         type: 'editor',
//         name: 'contribution',
//         message: 'Enter Contribution Guidelines:'
//     },
//     {
//         type: 'editor',
//         name: 'test',
//         message: 'Enter Test Instructions:'
//     },
//     {
//         type: 'list',
//         name: 'license',
//         message: 'Pick a license:',
//         choices: ['ISC', 'MIT']
//     }
// ];

// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         const readmeText = buildReadme(answers.title, answers.description, answers.install, answers.usage, answers.contribution, answers.test, answers.license);
//         fs.writeFileSync(`db/README.md`, readmeText);
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//           } else {
//             // Something else went wrong
//           }
//     });

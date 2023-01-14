const inquirer = require('inquirer');
const fs = require('fs');
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

const employees = [];

const questions1 = [
    // Prompt for managers name, employee ID, email address, and office number

];

const questions2 = [
    // Prompt to add engineer or intern
    {
        type: 'list',
        name: 'internOrEngineer',
        message: "Would you like to add an intern or engineer to the team?",
        choices: [
            'Engineer',
            'Intern',
            new inquirer.Separator(),
            'exit'
        ]
    }
];

inquirer.prompt(questions1).then((answers) => {
    // Make Manager object

    // Push object to employees array

    ask();
});

function ask() {
    inquirer.prompt(questions2).then((answers) => {
        const nextTimeMessage = 'Would you like to add another intern or engineer to the team?'
        if (answers.internOrEngineer === 'Engineer') {
            // Create Engineer object

            // Push object to employees array

            questions2[0].message = nextTimeMessage;
            ask();
        } else if (answers.internOrEngineer === 'Intern') {
            // Create Intern object

            // Push object to employees array

            questions2[0].message = nextTimeMessage;
            ask();
        } else {
            // exit
        }
    });
}



const inquirer = require('inquirer');
const fs = require('fs');
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const { managerQuestions, engineerQuestions, internQuestions } = require('./lib/questions.js')

const employees = [];

const engIntRecursive = [
    // Prompt to add engineer or intern
    {
        type: 'list',
        name: 'internOrEngineer',
        message: "Would you like to add an engineer or intern to the team?",
        choices: [
            'Engineer',
            'Intern',
            new inquirer.Separator(),
            'exit'
        ]
    }
];

inquirer.prompt(managerQuestions).then((answers) => {
    // Make Manager object

    // Push object to employees array

    console.log('\n');
    ask();
});

function ask() {
    inquirer.prompt(engIntRecursive).then((answers) => {
        const nextTimeMessage = 'Would you like to add another engineer or intern to the team?'
        if (answers.internOrEngineer === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((answers) => {
                // Create Engineer object
                
                // Push object to employees array

                console.log('\n');
                engIntRecursive[0].message = nextTimeMessage;
                ask();
            });
        } else if (answers.internOrEngineer === 'Intern') {
            inquirer.prompt(internQuestions).then((answers) => {
                // Create Intern object
                
                // Push object to employees array

                console.log('\n');
                engIntRecursive[0].message = nextTimeMessage;
                ask();
            });
        } else {
            // exit
            console.log('\nSending HTML data!')
        }
    });
}



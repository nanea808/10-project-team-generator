const inquirer = require('inquirer');
const fs = require('fs');
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

const employees = [];

const managerQuestions = [
    // Prompt for managers name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'ManagerName',
        message: "What's the managers full name?"
    },
    {
        type: 'input',
        name: 'ManagerEmployeeID',
        message: "What's the managers employee ID?"
    },
    {
        type: 'input',
        name: 'ManagerEmail',
        message: "What's the managers email address?"
    },
    {
        type: 'input',
        name: 'ManagerOfficeNum',
        message: "What's the managers office number?"
    }
];

const engineerQuestions = [
    // Prompt for engineer’s name, ID, email, and GitHub username

];

const internQuestions = [
    // Prompt for intern’s name, ID, email, and school

];

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

    ask();
});

function ask() {
    inquirer.prompt(engIntRecursive).then((answers) => {
        const nextTimeMessage = 'Would you like to add another engineer or intern to the team?'
        if (answers.internOrEngineer === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((answers) => {
                // Create Engineer object
                
                // Push object to employees array
            });
            engIntRecursive[0].message = nextTimeMessage;
            ask();
        } else if (answers.internOrEngineer === 'Intern') {
            // Create Intern object

            // Push object to employees array
            
            engIntRecursive[0].message = nextTimeMessage;
            ask();
        } else {
            // exit
        }
    });
}



const inquirer = require('inquirer');
const fs = require('fs');
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

const employees = [];

const managerQuestions = [
    // Prompt for managers name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'managerName',
        message: "What's the managers full name?"
    },
    {
        type: 'input',
        name: 'managerEmployeeID',
        message: "What's the managers employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What's the managers email address?"
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What's the managers office number?"
    }
];

const engineerQuestions = [
    // Prompt for engineer’s name, ID, email, and GitHub username
    {
        type: 'input',
        name: 'engineerName',
        message: "What's the Engineer's full name?"
    },
    {
        type: 'input',
        name: 'engineerEmployeeID',
        message: "What's the Engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What's the Engineer's email address?"
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What's the Engineer's GitHub username?"
    }
];

const internQuestions = [
    // Prompt for intern’s name, ID, email, and school
    {
        type: 'input',
        name: 'internName',
        message: "What's the Intern's full name?"
    },
    {
        type: 'input',
        name: 'internEmployeeID',
        message: "What's the Intern's employee ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What's the Intern's email address?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What's the Intern's school?"
    }
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



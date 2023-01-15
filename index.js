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
    const managerObj = new Manager(answers.managerName, answers.managerEmployeeID, answers.managerEmail, answers.managerOfficeNum);
    
    // Push object to employees array
    employees.push(managerObj);
    console.log(`\n${JSON.stringify(employees)}\n`);

    ask();
});

function ask() {
    inquirer.prompt(engIntRecursive).then((answers) => {
        const nextTimeMessage = 'Would you like to add another engineer or intern to the team?'
        if (answers.internOrEngineer === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((answers) => {
                // Create Engineer object
                const engineerObj = new Engineer(answers.engineerName, answers.engineerEmployeeID, answers.engineerEmail, answers.engineerGitHub);
                
                // Push object to employees array
                employees.push(engineerObj);
                console.log(`\n${JSON.stringify(employees)}\n`);

                engIntRecursive[0].message = nextTimeMessage;
                ask();
            });
        } else if (answers.internOrEngineer === 'Intern') {
            inquirer.prompt(internQuestions).then((answers) => {
                // Create Intern object
                const internObj = new Intern(answers.internName, answers.internEmployeeID, answers.internEmail, answers.internSchool);

                // Push object to employees array
                employees.push(internObj);
                console.log(`\n${JSON.stringify(employees)}\n`);

                engIntRecursive[0].message = nextTimeMessage;
                ask();
            });
        } else {
            // exit
            console.log('\nSending HTML data!');
        }
    });
}



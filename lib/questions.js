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

module.exports = { managerQuestions, engineerQuestions, internQuestions};
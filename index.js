const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./dist/index.html');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer)');
const Intern = require('./lib/Intern');

const generateRoster = require('./src/templateHTML');

const teamArray = [];



//starts application then prompts user to enter manager's info
const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name:"name",
            message:"Please input the team's manager's name."
        },
        {
            type:"input",
            name:"id",
            message:"Enter manager's ID."
        },
        {
            type:"input",
            name:"email",
            message:"Enter manager's email."
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Enter manager's office number."
        }
    ])
    .then(answers => {
        const managerInfo = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(managerInfo);
        return buildTeam();
    })
}

//After user adds manager's info then user is presented with menu to finish building team w/ options to add intern or engineer.
const buildTeam = () => {
    return inquirer.prompt ([
        {
            type:"list",
            name:"employeeRole",
            message:"Please select your employee's role you would like to add.",
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(Response => {
        //User is prompted differently depending on selecting Engineer or Intern
        if (Response.employeeRole === 'Engineer') { 
            addEngineer(); 
        } 
        if (Response.employeeRole === 'Intern') {
            addIntern(); 
        }
        if (Response.employeeRole === 'None'){
            finishedTeam();
        }
    })
}

// If user selects Engineer option then user is prompted to fill Engineer Info
const addEngineer = () => {
    return inquirer.prompt ([
        {
            type:"input",
            name:"name",
            message:"Please enter your Engineer's name."
        },
        {
            type:"input",
            name:"id",
            message:"Please enter your Engineer's ID."
        },
        {
            type:"input",
            name:"email",
            message:"Please enter your Engineer's email."
        },
        {
            type:"input",
            name:"github",
            message:"Please enter your Engineer's GitHub handle."
        },
        {
            type:"confirm",
            name:"addMoreEmps",
            message:"Would you like to add more member's to your team?",
            default: false
        }
    ])
    .then(answers => {
        const engineerInfo = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineerInfo);
        return buildTeam();
    });

}
const addIntern = () => {
    return inquirer.prompt ([
        {
            type:"input",
            name:"name",
            message:"Please enter your Intern's name."
        },
        {
            type:"input",
            name:"id",
            message:"Please enter your Intern's ID."
        },
        {
            type:"input",
            name:"email",
            message:"Please enter your Intern's email."
        },
        {
            type:"input",
            name:"school",
            message:"Please enter the school your Intern is attending."
        }
    ])
    .then(answers => {
        const internInfo = new Engineer(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(internInfo);
        return buildTeam();
    });

}

// After user is finished building team HTML is generated
const finishedTeam = () => {
    return inquirer.prompt ([
        {
            type:"confirm",
            name:"readyTeam",
            message:"Are you sure you have finished adding all your employees??",
            default: false
        }
    ])
    .then(answers => {
        if(readyTeam) {
            let roster = generateRoster(teamArray)
            console.log("You're team roster has been created! You can view the index.html file now.");
            writeFile(roster);
        }
    })
}

init();
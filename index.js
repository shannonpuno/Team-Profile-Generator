const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateRoster = require('./src/templateHTML');

const teamArray = [];



//starts application then prompts user to enter manager's info
const init = () => {
    addManager()
}

const addManager = () => {
    inquirer.prompt ([
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
    inquirer.prompt ([
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
            let roster = generateRoster(teamArray)
            console.log("Please wait while we generate your team.");
            writeFile(roster);
        }
    })
}

// If user selects Engineer option then user is prompted to fill Engineer Info
const addEngineer = () => {
    inquirer.prompt ([
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
        }
    ])
    .then(answers => {
        const engineerInfo = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineerInfo);
        return buildTeam();
    })

}
const addIntern = () => {
    inquirer.prompt ([
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
        const internInfo = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(internInfo);
        return buildTeam();
    })

}

// After user is finished building team HTML is generated


const writeFile = roster => {
    fs.writeFile('./dist/index.html', roster, err => {
        if(err) {
            console.log(err);
        } else {
            console.log("You're team roster has been created! You can view the index.html file now.");
        }
    });
};


init();

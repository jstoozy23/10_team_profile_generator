const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('@jest/console');
const data = require('./src/data');
const managerEmps = [];
const engineerEmps = [];
const internEmps = [];

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = [
    {
      message: 'Please provide your name',
      name: 'name',
    },
    {
      message: 'Please provide your employee ID',
      name: 'id',
    },
    {
      message: 'Please provide your email address',
      name: 'email',
    },
    {
      message: 'Please provide your office number',
      name: 'office',
    },
];

const firstStep = [
     {
       type: 'list',
       message: "What would you like to do now?",
       choices: ['Add an engineer?', 'Add an intern?', 'Finished?'],
       name: 'firstStep',
    },
]; 

const engineerQuestions = [
    {
       message: 'Name of Engineer',
       name: 'name',
    },
    {
       message: 'Engineers ID',
       name: 'id',
    },
    {
       message: 'Engineers email',
       name: 'email',
    },
    {
       message: 'Engineers GitHub username?',
       name: 'github',
    }
];

const internQuestions = [
    {
        message: 'Name of Intern',
        name: 'name',
     },
     {
        message: 'Interns ID',
        name: 'id',
     },
     {
        message: 'Interns email',
        name: 'email',
     },
     {
        message: 'Interns school',
        name: 'school',
     }
];


function start() {
    inquirer.prompt(questions)
    .then(({name, id, email, office}) => {
        managerEmps.push(new Manager (name, id, email, office))
        next();
    })
};

function next() {
    inquirer.prompt(firstStep)
    .then((data) => {
        if (data.firstStep === "Add an engineer?") {
            engineer();
        } else if (data.firstStep === "Add an intern?"){
            intern();
        } else {
            console.log('Sounds Good!');
            writeToFile(managerEmps, engineerEmps, internEmps);
        }
    })
};

function engineer() {
    inquirer.prompt(engineerQuestions)
    .then(({name, id, email, github}) => {
        engineerEmps.push(new Engineer (name, id, email, github));
        moveOn();
    })
};

function intern() {
    inquirer.prompt(internQuestions)
    .then(({name, id, email, school}) => {
        internEmps.push(new Intern (name, id, email, school));
        moveOn();
    })
};

function writeToFile(managerEmps, engineerEmps, internEmps) {
    console.log(managerEmps, engineerEmps, internEmps);
    fs.writeFile("./dist/index.html", data(managerEmps, engineerEmps, internEmps), (err) => (err) ? console.log("error") : console.log("Success!"))
};

start();



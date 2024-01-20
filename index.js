import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import * as EmailValidator from "email-validator";
import render from "./src/page-template.js";
import * as RXJS from "rxjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const validateEmail = (input) => {};

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager's name: ",
    // validate: function () {},
  },
  {
    type: "number",
    name: "id",
    message: "ID: ",
    // validate: function () {},
  },
  {
    type: "input",
    name: "email",
    message: "Email",
    validate: EmailValidator.validate,
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Engineer's Name: ",
    // validate: function () {},
  },
  {
    type: "number",
    name: "id",
    message: "ID: ",
    // validate: function () {},
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
    validate: EmailValidator.validate,
  },
  {
    type: "input",
    name: "githubUsername",
    message: "GitHub username: ",
    // validate: function () {},
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name: ",
    // validate: function () {},
  },
  {
    type: "number",
    name: "id",
    message: "ID: ",
    // validate: function () {},
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
    validate: EmailValidator.validate,
  },
  {
    type: "input",
    name: "school",
    message: "School: ",
    // validate: function () {},
  },
];

const addTeamMember = [
  {
    type: "list",
    name: "choice",
    message: "Add a new team member",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    // validate: function () {},
  },
];

const addAnotherMember = [
  {
    name: "addOtherMember",
    type: "confirm",
    message: "Add another team member? ",
  },
];

const addEngineer = async () => {
  const engineer = await inquirer.prompt(engineerQuestions);
  teamMembers.push(engineer);
};

const addIntern = async () => {
  const intern = await inquirer.prompt(internQuestions);
  teamMembers.push(intern);
};

const addMember = async () => {
  let cont = true;
  let { choice } = await inquirer.prompt(addTeamMember);
  switch (choice) {
    case "Add an engineer":
      await addEngineer();
      break;
    case "Add an intern":
      await addIntern();
      break;
    default:
      break;
  }
  return cont;
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const getTeamInformation = async () => {
  //   const manager = await inquirer.prompt(managerQuestions);
  //   teamMembers.push(manager);
  while (true) {
    const res = await addMember();
    if (!res) {
      break;
    }

    const { addOtherMember } = await inquirer.prompt(addAnotherMember);
    if (!addOtherMember) {
      break;
    }
  }
};
//

getTeamInformation();

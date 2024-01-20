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

const team = [];

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
    message: "Email: ",
    validate: EmailValidator.validate,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Office number: ",
    // validate: function () {},
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
    name: "github",
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

const addManager = async () => {
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  team.push(new Manager(name, id, email, officeNumber));
};

const addEngineer = async () => {
  const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
  team.push(new Engineer(name, id, email, github));
};

const addIntern = async () => {
  const { name, id, email, school } = await inquirer.prompt(internQuestions);
  team.push(new Intern(name, id, email, school));
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
const init = async () => {
  await addManager();
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
  fs.mkdir(OUTPUT_DIR, () => {
    console.log("Output directory created successfully");
  });
  fs.writeFile(outputPath, render(team), (res) => {
    console.log("File created successfully");
  });
};

init();

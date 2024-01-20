import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import * as EmailValidator from "email-validator";
import render from "./src/page-template.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const validateEmail = (input) => {};

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "This is a test",
    validate: function () {},
  },
  {
    type: "input",
    name: "id",
    message: "This is a test",
    validate: function () {},
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
    validate: function () {},
  },
  {
    type: "input",
    name: "id",
    message: "ID: ",
    validate: function () {},
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
    validate: function () {},
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name: ",
    validate: function () {},
  },
  {
    type: "input",
    name: "id",
    message: "ID: ",
    validate: function () {},
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
    validate: function () {},
  },
];

const addTeamMember = [
  {
    type: "list",
    name: "name",
    message: "This is a test",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    validate: function () {},
  },
];
// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt(
  /* Pass your questions in here */
  questions
);

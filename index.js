
// Include required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// Create array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions of your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information of your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution of your project:',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Please provide guidelines of your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions of your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license choice of your project:',
      choices: ["MIT", "Apache 2.0", "GPL 3.0"],
    },
    {
      type: 'input',
      name: 'GitHub username',
      message: 'Please provide a GitHub username of your project:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide a email address of your project:',
    },



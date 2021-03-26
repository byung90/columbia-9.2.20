const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['html', 'css', 'javascript']
    },
    {
      type: 'checkbox',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['email', 'text', 'phone']
    }
  ])
  .then(response => {
    console.log(response);
    fs.appendFile('output.txt', JSON.stringify(response), (err) => {
      if (err) throw err;
      console.log("Your file with the data has been created");
    })
  })
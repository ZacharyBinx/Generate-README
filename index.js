const {prompt} = require("inquirer");
const {writeFile} = require("fs");
const questions = require("./utils/questions");
const makeMD = require("./utils/makeMD");

prompt(questions).then((user) => 
    writeFile("userREADME.md", makeMD(user), () => 
    console.log("README Generated!")
    )
);
module.exports = [
{
    type: 'input',
    name: 'project',
    message: 'What is your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?',
},
{
    type: 'input',
    name: 'install',
    message: 'How does the user install your application?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What is your project used for?',
},
{
    type: 'input',
    name: 'contribute',
    message: 'What are the parameters for contributions to this project?',
},
{
    type: 'input',
    name: 'test',
    message: 'How can a user test your application?',
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Which license is this application covered under?', 
    choices: [
        {title: 'MIT', value: 'MIT License'},
        {title: 'Apache', value: 'Apache License'},
        {title: 'GPL', value: 'GNU General Public License'},
        {title: 'MPL', value: 'Mozilla Public License'},
        {title: 'LGPL', value: 'GNU Lesser General Public License'},
        {title: 'BSD (3-Clause)', value: 'BSD 3-Clause License'},
    ],
    hint:'',
},
{
    type: 'input',
    name: 'usergit',
    message: 'What is your GitHub link?',
},
{
    type: 'input',
    name: 'email',
    message: 'What email address can users send questions to regarding this project?',
},
];

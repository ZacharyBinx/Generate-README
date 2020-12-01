module.exports = [{
    type: 'list',
    name: 'license',
    message: 'Which license is this application covered under?', 
    choices: [
        {title: 'MIT', value: 'MIT License'},
        {title: 'Apache', value: 'Apache License'},
        {title: 'GPL', value: 'GNU General Public License'},
        {title: 'MPL', value: 'Mozilla Public License'},
        {title: 'BSD (3-Clause)', value: 'BSD 3-Clause License'},
    ],
    hint:'',
},
{
    type: 'input',
    name: 'name',
    message: 'Who is the copyright under?'
},
{
    type: 'number',
    name: 'year',
    message: 'What is the year this project was copyrighted?'
}]
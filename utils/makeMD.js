module.exports = function makeMD({ 
    project,
    description, 
    install, 
    usage, 
    contribute, 
    test, 
    license, 
    usergit, 
    email }) {
  return `# ${project}

## Table Of Contents
<!-- click each bullet to move to the associated section -->

## Whats It All About?

${description}

## Install

${install}

## Usage

${usage}

## Contribute?

${contribute}

## Test

${test}

## License

This application is covered under ${license}.

## Questions

For more content, check out my ![GitHub](${usergit})!

Any questions regarding this project can be sent to ${email} and I will respond as soon as reasonably possible.
`;
};
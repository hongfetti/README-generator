// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateMarkdown = ({ title, description, installation, usage, contribution, test, license, features, git, email }) =>
  `# ${title}
## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Features](#features)
- ['How to Contribute'](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

Thank you for you contributions:
${contribution}

## License

[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})

## Features

${features}

## How to Contribute

If you would like to contribute to this application, please consult the guidelines from The [Contributor Covenant](https://www.contributor-covenant.org/), an industry standard.

## Tests

${test}

## Questions

Github: http://github.com/${git}

Email: ${email}`;


export default generateMarkdown;

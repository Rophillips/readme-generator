// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `

  # Title
  ${response.title}
  
  ## Description
  ${response.description}

  ## Table of Contents
  ${response.tableofContents}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## Credits
  ${response.credits}

  ## Tests
  ${response.tests}

  ## License
  ${response.license}


`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(projectLicense) {
   if(projectLicense) {
     return `![https://choosealicense.com](https://shields.io/badge/license-${response.projectLicense}-brightgreen)`;
    
     }else {
     return "";
   }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
   if (projectLicense === "MIT"){
     return `[Link to License] https://choosealicense.com/licenses/mit/`;
   } else {
     return "";
  }
 }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# Title

  ${response.projectTitle}
  
## Description

  ${response.projectDescription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Description](#description)
* [Contributions](#contributions)
  
## Installation

  ${response.projectInstall}

## Usage

  ${response.projectUsage}

## Credits

  ${response.projectCredits}

## Tests

  ${response.projectTests}

## License

  ${response.projectLicense}
  
`;
}

module.exports = generateMarkdown;

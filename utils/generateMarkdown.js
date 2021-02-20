// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(projectLicense) {
   if(projectLicense) {
     return `![badge](https://shields.io/badge/license-${projectLicense}-brightgreen)`;
    
    } 
   if (projectLicense) {
     return `![badge](https://shields.io/badge/license-${projectLicense}-brightgreen)`;
    }
   if (projectLicense) {
     return `![badge](https://shields.io/badge/license-${projectLicense}-blue)`;
     }
    else {
      return "";
    }
    
   }
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
   if (projectLicense === "MIT"){
     return `[License link] https://choosealicense.com/licenses/mit/`;

   } else if (projectLicense === "mozilla") {
     return `[License link] https://choosealicense.com/licenses/mpl-2.0/`;
   
   } else if (projectLicense === "GNU") {
     return `[License link] https://choosealicense.com/licenses/gpl-3.0/`;

   } else if (projectLicense === "no license") {
    return "";
   }
     
  }
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
  if (projectLicense === "MIT" || projectLicense === "mozilla" || projectLicense === "GNU"){
    return `License
${renderLicenseBadge(projectLicense)}
*${renderLicenseLink(projectLicense)}`;

  }else {
    return "";
  }
}


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
* [Questions](#questions)

## Questions

For any questions, just email me at; ${response.projectEmail}

  
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

  ${renderLicenseSection(response.projectLicense)}

  
`;

}

module.exports = generateMarkdown;

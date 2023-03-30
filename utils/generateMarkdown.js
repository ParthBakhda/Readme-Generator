// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return 'https://img.shields.io/badge/license-MIT-blue.svg';
    } else if (license === 'Apache 2.0') {
      return 'https://img.shields.io/badge/license-Apache%202.0-blue.svg';
    } else if (license === 'GPL 3.0') {
      return 'https://img.shields.io/badge/license-GPL%203.0-blue.svg';
    } else {
      return '';
    }
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL 3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    } else {
      return '';
    }
  }
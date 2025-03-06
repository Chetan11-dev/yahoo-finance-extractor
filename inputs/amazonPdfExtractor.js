/**
 * @typedef {import('botasaurus-controls').Controls} Controls
 * @typedef {import('botasaurus-controls').FileTypes} FileTypes
 * 
 */

const { FileTypes } = require('botasaurus-controls')

/**
 * @param {Controls} controls
 */
function getInput(controls) {
    // Render a File Input for uploading PDFs
        controls.filePicker('files', {
          label:"Files",
          accept: FileTypes.PDF, 
          isRequired: true,
      })
          
  }
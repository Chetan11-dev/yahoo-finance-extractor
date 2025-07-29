export default {
    "stockPriceScraper": (controls) => {
/**
 * @typedef {import('botasaurus-controls').Controls} Controls
 * 
 */

/**
 * @param {Controls} controls
 */
function getInput(controls) {
    controls
        // Render a Text Input
        .text('stock_symbol', { 
            isRequired: true, 
            label: 'Stock Symbol', 
            placeholder: 'Enter a stock symbol (e.g., AAPL)', 
            defaultValue: 'AAPL' 
        });
}
        return getInput(controls);
    },
    "amazonPdfExtractor": (controls) => {
/**
 * @typedef {import('botasaurus-controls').Controls} Controls
 * @typedef {import('botasaurus-controls').FileTypes} FileTypes
 * 
 */

const { FileTypes } = {"FileTypes":{"IMAGE":["jpeg","jpg","png","gif","bmp","svg","webp"],"EXCEL":["xls","xlsx"],"AUDIO":["mp3","wav","ogg","m4a","flac"],"CSV":["csv"],"PDF":["pdf"],"ZIP":["zip"],"VIDEO":["mp4","avi","mov","wmv","flv","mkv"]}}/**
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
        return getInput(controls);
    },
};
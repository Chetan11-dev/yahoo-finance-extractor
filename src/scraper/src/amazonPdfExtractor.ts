// Import necessary libraries
import fs from 'fs'; // For file system operations
import pdf from 'electron-pdf-parse'; // For parsing PDF files
import { task } from 'botasaurus/task'; // For task management

// Main function to extract data from the PDF text
async function extractFromText(text, pdfPath) {
  // Utility function to format date from 'MM/DD/YYYY' to 'DD-MM-YYYY'
  function formatDate(dateStr) {
    const [month, day, year] = dateStr.split('/');
    return `${day}-${month}-${year}`;
  }

  // Extract place of supply using regex
  const placeOfSupplyMatch = text.match(/Place of supply : ([\w\s]+)\(/);
  // Extract GSTIN using regex (reverse text to find it easily)
  const gstinMatch = text
    .split('\n')
    .reverse()
    .join('\n')
    .match(/GSTIN : (\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1})/);
  // Extract document number using regex
  const documentNumberMatch = text.match(/Document Number\s*([A-Z0-9]+)/);
  // Extract document date using regex
  const documentDateMatch = text.match(/Document Date\s*(\d{2}\/\d{2}\/\d{4})/);

  // Prepare the results object
  const results = {
    'Place of Supply': placeOfSupplyMatch ? placeOfSupplyMatch[1].trim() : null,
    GSTIN: gstinMatch ? gstinMatch[1] : null,
    'Document Number': documentNumberMatch ? documentNumberMatch[1] : null,
    'Document Date': documentDateMatch
      ? formatDate(documentDateMatch[1])
      : null,
  };

  return results;
}

// Function to read and extract data from a PDF file
async function extractData(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath); // Read the PDF file
  const data = await pdf(dataBuffer); // Parse the PDF
  return extractFromText(data.text, pdfPath); // Extract data from the parsed text
}

// Task definition for the Amazon PDF Extractor
export const amazonPdfExtractor = task<any>({
  name: 'amazonPdfExtractor', // Name of the task
  run: async function ({ data }) {
    const files = data['files']; // Get the list of files to process
    const results: any[] = []; // Array to store results

    // Process each file
    for (const file of files) {
      try {
        const result = await extractData(file.path); // Extract data from the PDF
        results.push(result); // Add the result to the array
      } catch (error: any) {
        console.error(error); // Log any errors
        results.push({ failed: file, error: error.toString() }); // Add error details to results
      }
    }
    return results; // Return the results
  },
});

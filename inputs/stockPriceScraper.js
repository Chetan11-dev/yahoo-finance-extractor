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
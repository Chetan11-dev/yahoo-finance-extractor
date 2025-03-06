import { playwright } from 'botasaurus/playwright';

const stockPriceScraper = playwright<any>({
  // Run the scraper opening a browser window
  headless: false,
  // Reuse the browser instance for multiple tasks
  reuseDriver: true,
  // Name the scraper for Botasaurus to find inputs
  name: 'stockPriceScraper',
  run: async ({ data, page }) => {
    // Extract the stock symbol from the input data
    const stock_symbol = data['stock_symbol'];
    // stock_symbol the Yahoo Finance URL using the stock symbol
    const link = `https://finance.yahoo.com/quote/${stock_symbol}`;

    // Navigate to the Yahoo Finance page
    await page.goto(link, { waitUntil: 'domcontentloaded' });

    // Extract the stock price using a selector
    const stock_price = parseFloat(
      (await page.textContent('[data-testid="qsp-price"]')) as string,
    );

    // Return the extracted stock price
    return {
      stock_symbol: stock_symbol,
      stock_price: stock_price,
    };
  },
});

export { stockPriceScraper };

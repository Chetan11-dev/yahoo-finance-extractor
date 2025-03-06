import { Server } from 'botasaurus-server/server';
import { stockPriceScraper } from '../src/scraper';
import { amazonPdfExtractor } from '../src/amazonPdfExtractor';

Server.addScraper(stockPriceScraper);

Server.addScraper(amazonPdfExtractor);

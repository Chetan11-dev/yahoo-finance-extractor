export const appProps = {
    "header_title": "Botasaurus",
    "description": "Build Awesome Scrapers with Botasaurus, The All in One Scraping Framework.",
    "right_header": {
        "text": "Love It? Star It! ★",
        "link": "https://github.com/omkarcloud/botasaurus"
    },
    "readme": "<p align=\"center\">\n  <img src=\"https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/mascot.png\" alt=\"botasaurus\" />\n</p>\n  <div align=\"center\" style=\"margin-top: 0;\">\n  <h1>✨ Botasaurus Desktop Tutorial ✨</h1>\n</div>\n<em>\n  <h5 align=\"center\">(Programming Language - TypeScript)</h5>\n</em>\n<p align=\"center\">\n  <a href=\"https://github.com/omkarcloud/botasaurus-desktop-tutorial/fork\">\n    <img alt=\"botasaurus-desktop-tutorial forks\" src=\"https://img.shields.io/github/forks/omkarcloud/botasaurus-desktop-tutorial?style=for-the-badge\" />\n  </a>\n  <a href=\"https://github.com/omkarcloud/botasaurus-desktop-tutorial/stargazers\">\n    <img alt=\"Repo stars\" src=\"https://img.shields.io/github/stars/omkarcloud/botasaurus-desktop-tutorial?style=for-the-badge&color=yellow\" />\n  </a>\n  <a href=\"https://github.com/omkarcloud/botasaurus-desktop-tutorial/blob/master/LICENSE\">\n    <img alt=\"botasaurus-desktop-tutorial License\" src=\"https://img.shields.io/github/license/omkarcloud/botasaurus-desktop-tutorial?color=orange&style=for-the-badge\" />\n  </a>\n  <a href=\"https://github.com/omkarcloud/botasaurus-desktop-tutorial/issues\">\n    <img alt=\"issues\" src=\"https://img.shields.io/github/issues/omkarcloud/botasaurus-desktop-tutorial?color=purple&style=for-the-badge\" />\n  </a>\n</p>\n<p align=\"center\">\n  <img src=\"https://views.whatilearened.today/views/github/omkarcloud/botasaurus-desktop-tutorial.svg\" width=\"80px\" height=\"28px\" alt=\"View\" />\n</p>\n\n\n<p align=\"center\">\n  <a href=\"https://gitpod.io/#https://github.com/omkarcloud/botasaurus-desktop-starter\">\n    <img alt=\"Open in Gitpod\" src=\"https://gitpod.io/button/open-in-gitpod.svg\" />\n  </a>\n</p>\n\n\n# Botasaurus Desktop Tutorial\n\nThis repository contains the final code for the **Botasaurus Desktop Tutorial**.  It contains the 2 extractors:\n\n\n1. **Yahoo Finance Stock Scraper**\n   This tool scrapes real-time stock prices from Yahoo Finance, demonstrating how you can use web scraping tools like Playwright in a desktop app.\n\n   ![Stock Scraper Demo](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/stock-scraper-preview.gif)\n\n2. **Amazon Invoice PDF Extractor**\n   This tool automates the extraction of key invoice data from Amazon PDF invoices, saving hours of manual work for accountants. It extracts the following information:\n   - Document Number\n   - Document Date\n   - Place of Supply\n   - GST Identification Number\n\n   ![PDF Extraction Demo](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/pdf-extract-preview.gif)\n\n\n## 🚀 Project Setup\n\nTo run locally, follow these steps:  \n\n1️⃣ Clone the Magic 🧙‍♀️:\n   ```bash\n   git clone https://github.com/omkarcloud/botasaurus-desktop-tutorial my-botasaurus-desktop-app\n   cd my-botasaurus-desktop-app\n   ```\n\n2️⃣ Install Packages 📦:\n   ```bash\n   npm install\n   ```\n\n3️⃣ Launch the App 🚀:\n   ```bash\n   npm run dev\n   ```\n\nThis will launch your **Botasaurus** desktop application in development mode.  \n\n\n## 💡 Learn to Develop Scraping Apps\n\nTo understand how to develop desktop apps using **Botasaurus**, please refer to the [Botasaurus Desktop Documentation](https://github.com/omkarcloud/botasaurus/blob/master/botasaurus-desktop-tutorial.md).\n\n\n## 📦 Create Installers for Your OS\n\nTo create an installer for your operating system, run the following command:\n```bash\nnpm run package\n```\n\nAfter executing the command, you can find the installer for your OS in the `release/build` folder.\n\n![Screenshot of release/build folder with OS-specific installer](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/installer-build-folder.png)\n\n**Note**  \nOn Windows, if you face the \"resource busy or locked\" error:\n\n![Resource Busy](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/resource-busy.png)  \n\nPlease follow these steps to resolve the issue:\n1. Run the Command Prompt as an administrator.\n2. Use the 'cd' command to navigate to your project directory.\n3. Run the command `npm run package` again to create the installer.\n\nThis will resolve the error and allow the installer to be created successfully.\n\n## 📦 Creating Installers for All Operating Systems (Recommended Method)\n\nTo automatically create installers for all operating systems whenever you push changes to GitHub, you can set up GitHub Actions. For step-by-step instructions, please follow the guide [here](https://github.com/omkarcloud/botasaurus/blob/master/botasaurus-desktop-tutorial.md#how-do-i-create-installers-for-multiple-platforms). \n\nThis is the recommended method for creating installers.",
    "enable_cache": false,
    "scrapers": [
        {
            "name": "Stock Price Scraper",
            "scraper_name": "stockPriceScraper",
            "route_path": "stock-price-scraper",
            "input_js_hash": "ae14717cd467d515440c92ad377696d7",
            "filters": [],
            "sorts": [
                {
                    "id": "no_sort",
                    "label": "No Sort"
                }
            ],
            "views": [],
            "default_sort": "no_sort",
            "max_runs": 1
        },
        {
            "name": "Amazon Pdf Extractor",
            "scraper_name": "amazonPdfExtractor",
            "route_path": "amazon-pdf-extractor",
            "input_js_hash": "d2fafb007820df0bda0512002eb6102b",
            "filters": [],
            "sorts": [
                {
                    "id": "no_sort",
                    "label": "No Sort"
                }
            ],
            "views": [],
            "default_sort": "no_sort",
            "max_runs": null
        }
    ],
    "productName": "Todo My App Name"
}
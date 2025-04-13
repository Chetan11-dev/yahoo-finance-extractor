<p align="center">
  <img src="https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/mascot.png" alt="botasaurus" />
</p>
  <div align="center" style="margin-top: 0;">
  <h1>✨ Botasaurus Desktop Tutorial ✨</h1>
</div>
<em>
  <h5 align="center">(Programming Language - TypeScript)</h5>
</em>
<p align="center">
  <a href="https://github.com/omkarcloud/botasaurus-desktop-tutorial/fork">
    <img alt="botasaurus-desktop-tutorial forks" src="https://img.shields.io/github/forks/omkarcloud/botasaurus-desktop-tutorial?style=for-the-badge" />
  </a>
  <a href="https://github.com/omkarcloud/botasaurus-desktop-tutorial/stargazers">
    <img alt="Repo stars" src="https://img.shields.io/github/stars/omkarcloud/botasaurus-desktop-tutorial?style=for-the-badge&color=yellow" />
  </a>
  <a href="https://github.com/omkarcloud/botasaurus-desktop-tutorial/blob/master/LICENSE">
    <img alt="botasaurus-desktop-tutorial License" src="https://img.shields.io/github/license/omkarcloud/botasaurus-desktop-tutorial?color=orange&style=for-the-badge" />
  </a>
  <a href="https://github.com/omkarcloud/botasaurus-desktop-tutorial/issues">
    <img alt="issues" src="https://img.shields.io/github/issues/omkarcloud/botasaurus-desktop-tutorial?color=purple&style=for-the-badge" />
  </a>
</p>
<p align="center">
  <img src="https://views.whatilearened.today/views/github/omkarcloud/botasaurus-desktop-tutorial.svg" width="80px" height="28px" alt="View" />
</p>


<p align="center">
  <a href="https://gitpod.io/#https://github.com/omkarcloud/botasaurus-desktop-starter">
    <img alt="Open in Gitpod" src="https://gitpod.io/button/open-in-gitpod.svg" />
  </a>
</p>


# Botasaurus Desktop Tutorial

This repository contains the final code for the **Botasaurus Desktop Tutorial**.  It contains the 2 extractors:


1. **Yahoo Finance Stock Scraper**
   This tool scrapes real-time stock prices from Yahoo Finance, demonstrating how you can use web scraping tools like Playwright in a desktop app.

   ![Stock Scraper Demo](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/stock-scraper-preview.gif)

2. **Amazon Invoice PDF Extractor**
   This tool automates the extraction of key invoice data from Amazon PDF invoices, saving hours of manual work for accountants. It extracts the following information:
   - Document Number
   - Document Date
   - Place of Supply
   - GST Identification Number

   ![PDF Extraction Demo](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/pdf-extract-preview.gif)


## 🚀 Project Setup

To run locally, follow these steps:  

1️⃣ Clone the Magic 🧙‍♀️:
   ```bash
   git clone https://github.com/omkarcloud/botasaurus-desktop-tutorial my-botasaurus-desktop-app
   cd my-botasaurus-desktop-app
   ```

2️⃣ Install Packages 📦:
   ```bash
   npm install
   ```

3️⃣ Launch the App 🚀:
   ```bash
   npm run dev
   ```

This will launch your **Botasaurus** desktop application in development mode.  


## 💡 Learn to Develop Scraping Apps

To understand how to develop desktop apps using **Botasaurus**, please refer to the [Botasaurus Desktop Documentation](https://github.com/omkarcloud/botasaurus/blob/master/botasaurus-desktop-tutorial.md).


## 📦 Create Installers for Your OS

To create an installer for your operating system, run the following command:
```bash
npm run package
```

After executing the command, you can find the installer for your OS in the `release/build` folder.

![Screenshot of release/build folder with OS-specific installer](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/installer-build-folder.png)

**Note**  
On Windows, if you face the "resource busy or locked" error:

![Resource Busy](https://raw.githubusercontent.com/omkarcloud/botasaurus/master/images/resource-busy.png)  

Please follow these steps to resolve the issue:
1. Run the Command Prompt as an administrator.
2. Use the 'cd' command to navigate to your project directory.
3. Run the command `npm run package` again to create the installer.

This will resolve the error and allow the installer to be created successfully.

## 📦 Creating Installers for All Operating Systems (Recommended Method)

To automatically create installers for all operating systems whenever you push changes to GitHub, you can set up GitHub Actions. For step-by-step instructions, please follow the guide [here](https://github.com/omkarcloud/botasaurus/blob/master/botasaurus-desktop-tutorial.md#how-do-i-create-installers-for-multiple-platforms). 

This is the recommended method for creating installers.
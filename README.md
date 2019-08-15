# Degordian Front end zadatak

I have written this simple README file for easier understanding of this application

## Installation
After you clone the repository from github or download it, first you must install all the necessary packages using the package manager of your choice

Using npm:

```bash
npm install
```
Using yarn:
```bash
yarn install
```

## Usage
Because there is webpack configurated, there are two choices available to run the application:

#### Development mode:

Open your console and run the command:

```bash
npm start
```

This will run the "start" command from package.json file which starts the webpack-dev-server and opens the browser for you. The application will run usually on port 8080.

#### Production mode:

To view the optimized, production ready application first you must build it using the command:

```bash
npm run build
```

This will run the "build" command from package.json files, and generated dist directory in root project folder. After that, you can either double click on generated index.html file to open it in browser, or open it from your console using:

```bash
ls -l
cd dist

/* For Mac use */
open -a "Google Chrome" index.html

/* For Windows use */
start index.html
```

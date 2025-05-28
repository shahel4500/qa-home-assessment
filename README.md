# Cypress Framework using Javascript
Supports both UI and API tests

## :gear: How to Start
1. Clone the project
2. `npm i` - Install all the dependencies
3. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing conflicts use `npm i --force`.
4. Run `npx cypress run` to execute the tests in CLI
6. To run postman collection, install [postman ci](https://learning.postman.com/docs/postman-cli/postman-cli-installation)

## :heavy_check_mark: Run tests
- cypress test runner (cypress __open__):
  - `npm run cypress:chrome` (change browser name as firefox or safari)
    
- cypress __headless mode__ (cypress run):
  - `npm run cypress:chrome:headless` (change browser name as firefox or safari)

- newman login test:
  - `postman login --with-api-key <api-key>` (One time)
  - `npm run newman:login` 

#### :test_tube: Tests
:file_folder: Features are located in `cypress/e2e/features` folder

:file_folder: Steps are located in `cypress/e2e/step_definitions` folder

:file_folder: Selectors (CSS selectors) are located in `cypress/pages` folder

#### :hammer_and_wrench: Configuration
Config files:
1. `cypress.config.js` - Main config file where default behavior of Cypress can be modified. [More info](https://docs.cypress.io/guides/references/configuration)
2. `jsconfig.js` - specifies the root files and the options for the features.

#### :diamond_shape_with_a_dot_inside: IDE setup and recommended extensions
- [VS Code](https://code.visualstudio.com/download) with following extensions:
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to keep your code tidy
    - [Cucumber (Gherkin) Full Support] - for cucumber support

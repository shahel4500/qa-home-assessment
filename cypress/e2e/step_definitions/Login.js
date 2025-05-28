import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("User is on Login Page", () => {
  cy.visit(Cypress.env('LOGIN_URL'));
});

When("User logs in with Admin", () => {
  cy.login(Cypress.env('ADMIN_USERNAME'),Cypress.env('ADMIN_PASSWORD'))
});

Then("User should be logged in", () => {
  loginPage.elements.myAccount().should("be.visible");
});

When("User logs in with wrong credentials", () => {
  loginPage.typeEmail("invalid@example.com")
  loginPage.typePassword("invalid123")
  loginPage.clickLogin()
});

Then("User should see error message", () => {
  loginPage.elements.error().should('have.text', 'Incorrect email or password');
});
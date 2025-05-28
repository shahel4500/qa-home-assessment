import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("User is on Login Page", () => {
  cy.visit("http://localhost:8000/login/");
});

When("User logs in with Admin", () => {
  loginPage.typeEmail("admin@example.com")
  loginPage.typePassword("admin123")
  loginPage.clickLogin()
});

Then("User should be logged in", () => {
  loginPage.elements.myAccount().should("be.visible");
});
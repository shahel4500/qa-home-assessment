class LoginPage {
  elements = {
    emailInput: () => cy.get("input#email"),
    passwordInput: () => cy.get("input#password"),
    login: () => cy.get("button[type='submit']"),
    myAccount: () => cy.get('#userInfo'),
  };
  
  typeEmail(emaild){
    this.elements.emailInput().type(emaild);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.login().click();
  }

}

export const loginPage = new LoginPage();

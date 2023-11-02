/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When("I type a username {}", (username) => {
  cy.get("#text").type(username);
});

When("I type a password {}", (password) => {
  cy.get("#password").type(password);
});

When("I click on the login button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then(
  "I should be presented an alert box which contains text {string}",
  (message) => {
    expect(stub).to.have.been.calledWith(message);
  }
);

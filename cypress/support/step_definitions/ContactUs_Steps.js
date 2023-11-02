/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I type a first name", () => {
  cy.get('[name="first_name"]').type("Noah");
});
When("I type a last name", () => {
  cy.get('[name="last_name"]').type("Hyor");
});

When("I enter an email address", () => {
  cy.get('[name="email"]').type("noahhyor@mail.com");
});

When("I type a comment", () => {
  cy.get('textarea[name="message"]').type("Hello world!");
});

When("I click on the submit button", () => {
  cy.get('[type="submit"]').click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When("I type a specific first name {string}", (first_name) => {
  cy.get('[name="first_name"]').type(first_name);
});

When("I type a specific last name {string}", (last_name) => {
  cy.get('[name="last_name"]').type(last_name);
});

When("I enter a specific email address {string}", (email) => {
  cy.get('[name="email"]').type(email);
});

When(
  "I type a words {string} and number {int} within the comment input field",
  (words, number) => {
    cy.get('textarea[name="message"]').type(words + " " + number);
  }
);

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
  }
);

When("I type a {string} and a comment {string}", (email, comment) => {
  cy.get('[name="email"]').type(email);
  cy.get('textarea[name="message"]').type(comment);
});

Then("I should be presented with header text {string}", (message) => {
  cy.xpath("//h1 | //body").contains(message);
});

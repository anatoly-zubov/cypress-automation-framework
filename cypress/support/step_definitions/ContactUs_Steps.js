/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_objects/Contact_Us_PO";

const contactUs_Page = new ContactUs_PO();

When("I type a first name", () => {
  // cy.get('[name="first_name"]').type("Noah");
  contactUs_Page.type_FirstName("Noah");
});
When("I type a last name", () => {
  //cy.get('[name="last_name"]').type("Hyor");
  contactUs_Page.type_LastName("Hyor");
});

When("I enter an email address", () => {
  //cy.get('[name="email"]').type("noahhyor@mail.com");
  contactUs_Page.type_EmailAddress("noahhyor@mail.com");
});

When("I type a comment", () => {
  //cy.get('textarea[name="message"]').type("Hello world!");
  contactUs_Page.type_Comment("Hello world!");
});

When("I click on the submit button", () => {
  //cy.get('[type="submit"]').click();
  contactUs_Page.clickOn_Submit_Button();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    //cy.get("h1").should("have.text", "Thank You for your Message!");
    contactUs_Page.validate_Submission_Header("Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    //cy.get("body").contains("Error: Invalid email address");
    contactUs_Page.validate_Submission_Header("Error: Invalid email address");
  }
);

When("I type a specific first name {string}", (first_name) => {
  //cy.get('[name="first_name"]').type(first_name);
  contactUs_Page.type_FirstName(first_name);
});

When("I type a specific last name {string}", (last_name) => {
  //cy.get('[name="last_name"]').type(last_name);
  contactUs_Page.type_LastName(last_name);
});

When("I enter a specific email address {string}", (email) => {
  //cy.get('[name="email"]').type(email);
  contactUs_Page.type_EmailAddress(email);
});

When(
  "I type a words {string} and number {int} within the comment input field",
  (words, number) => {
    //cy.get('textarea[name="message"]').type(words + " " + number);
    contactUs_Page.type_Comment(words + " " + number);
  }
);

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    // cy.get('[name="first_name"]').type(firstName);
    // cy.get('[name="last_name"]').type(lastName);
    contactUs_Page.type_FirstName(firstName);
    contactUs_Page.type_LastName(lastName);
  }
);

When("I type a {string} and a comment {string}", (email, comment) => {
  // cy.get('[name="email"]').type(email);
  // cy.get('textarea[name="message"]').type(comment);
  contactUs_Page.type_EmailAddress(email);
  contactUs_Page.type_Comment(comment);
});

Then("I should be presented with header text {string}", (message) => {
  //cy.xpath("//h1 | //body").contains(message);
  contactUs_Page.validate_Submission_Header(message);
});

/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO();

Before(() => {
  cy.log("Executing commands inside Homepage Steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
  homePage.navigate("");
});

When(`I click on the contact us button`, () => {
  homePage.clickOn_ContactUs_Button();
});

When(`I click on the login portal button`, () => {
  homePage.clickOn_Login_Button();
});

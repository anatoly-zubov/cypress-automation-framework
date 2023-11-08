/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO {
  elements = {
    comment_TextField: () => cy.get('textarea[name="message"]'),
    submit_Button: () => cy.get('[type="submit"]'),
    submission_Header_Text: () => cy.xpath("//h1 | //body"),
  };

  navigateTo_ContactUs_Page() {
    super.navigate("/Contact-Us/contactus.html");
  }

  type_FirstName(first_name) {
    cy.get('[name="first_name"]').type(first_name);
  }

  type_LastName(last_name) {
    cy.get('[name="last_name"]').type(last_name);
  }

  type_EmailAddress(email) {
    cy.get('[name="email"]').type(email);
  }

  type_Comment(comment) {
    this.elements.comment_TextField().type(comment);
  }

  clickOn_Submit_Button() {
    this.elements.submit_Button().click();
  }

  validate_Submission_Header(message) {
    this.elements.submission_Header_Text().contains(message);
    this.elements
      .submission_Header_Text()
      .invoke("text")
      .should("include", message);
  }
}
export default ContactUs_PO;

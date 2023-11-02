@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

  Background: Pre conditions
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button

  Scenario: Valid Contact Us Form Submission
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message


  Scenario: Invalid Contact Us Form Submission
    And I type a first name
    And I type a last name
    And I type a comment
    And I click on the submit button
    Then I should be presented with a unsuccessful contact us submission message

  Scenario: Valid Contact Us Form Submission - Using specific data
    And I type a specific first name "Noah"
    And I type a specific last name "Hyor"
    And I enter a specific email address "noahhyor@mail.com"
    And I type a words "Hello, how are you?" and number 6788 within the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

  @smoke
  Scenario Outline: Validate contact us page
    And I type a first name <firstName> and a last name '<lastName>'
    And I type a '<emailAddress>' and a comment '<comment>'
    And I click on the submit button
    Then I should be presented with header text '<message>'

    Examples: 
      | firstName | lastName | emailAddress      | comment      | message                     |
      | Noah      | Hyor     | noahhyor@mail.com | Hello World! | Thank You for your Message! |
      | Mia       | Carter   | miacarte@mail.com | testtesttest | Thank You for your Message! |
      | Mia       | Carter   | miacarte          | testtesttest | Invalid email address       |

@login @regression
Feature: WebdriverUniversity - Login Portal Page

  Scenario Outline: Validate login portal page
    Given I navigate to the webdriveruniversity login page
    And I type a username <username>
    And I type a password <password>
    And I click on the login button
    Then I should be presented an alert box which contains text '<message>'

    Examples: 
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver1   | validation failed    |
      | web       | webdriver123 | validation failed    |

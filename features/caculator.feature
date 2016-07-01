Feature: Super Calculator
  Scenario: add functionality
    Given I go to home page
    When I input "2" and "3" into boxes
    And I click Go button
    Then I get result as "5"
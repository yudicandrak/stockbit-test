Feature: Test Selection

    Stockbit Test

    Scenario: User can see book detail
    Given User go to url book
    When User in Book Store page
    And User search book Git Pocket Guide
    And User click book Git Pocket Guide
    Then User see Git Pocket Guide
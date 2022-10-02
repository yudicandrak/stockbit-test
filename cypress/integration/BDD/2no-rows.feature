Feature: Test No Rows

    Stockbit Test

    Scenario: User can see no rows page
    Given User go to url books
    When User in Book Store page
    And User search book qa engineer
    Then User see No rows found
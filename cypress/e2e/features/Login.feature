Feature: Login page

   Scenario: Success Admin Login
      Given User is on Login Page
      When User logs in with Admin
      Then User should be logged in

   Scenario: Failed Login
      Given User is on Login Page
      When User logs in with wrong credentials
      Then User should see error message
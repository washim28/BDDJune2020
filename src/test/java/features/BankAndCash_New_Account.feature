Feature: Techfios Bank and Cash Adding New Account Functionality 

Background:  
	#Given User is on the techfios loginpage      
	Given User is on the TechFios Login Page 
@Add_New_Account
Scenario Outline: 
	User should be able to log in with valid credentials (Making Variables work as Placeholders 
	When User enters the "<userName>" and "<password>" 
	Then User should be able to see the DashBoard Page 
	#When User enter the "<userName>" and "<password>"   
	#Then User should be able to see the Dash_Board Page    
	Then User clicks on Bank and Cash 
	Then User click on the New Account 
	Then User fill up the form entering "<Account_Title>" and "<Description>" and "<Initial_Balance>" and "<Account_Number>" and "<Contact_Person>" and "<Phone>" and "<Internet Banking URL>" 
	Then User should be able to submit the data 
	Then User should land on Accounts_Title_Page  
	
	Examples: 
		| userName | password|Account_Title | Description | initial_Balance | Account_Number | Contact_Person| Phone | Internet Banking URL |
		| demo@techfios.com | abc123 | Check Account | New Account | 10000 | 5652369856 | John Doe | 7526934529 | https://www.td.com/us/en/personal-banking/ |
	
		 
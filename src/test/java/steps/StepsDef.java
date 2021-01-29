package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import page.New_Account;
import util.BrowserFactory;

public class StepsDef {
	WebDriver driver;
	LoginPage loginpage;
	New_Account newaccount;
	@Before
	public void beforeRun() {
		driver = BrowserFactory.init();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		newaccount = PageFactory.initElements(driver, New_Account.class);
	}

	@Given("^User is on the TechFios Login Page$")
	public void User_is_on_the_TechFios_Login_Page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String userName) {
		loginpage.enterUserName(userName);
	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) {
		loginpage.enterPassword(password);
	}

	@When("^User clicks on the log in button$")
	public void user_clicks_on_the_log_in_button() {
		loginpage.clickSinginButton();
	}

	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_and(String userName, String password) {
		loginpage.Login(userName, password);
	}

	@Then("^User should be able to see the DashBoard Page$")
	public void user_should_be_able_to_see_the_DashBoard_Page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}
	
	  @Then("^User clicks on Bank and Cash$") public void
	  user_clicks_on_Bank_and_Cash() { newaccount.click_ON_Bank_and_Cash(); }
	  
	  @Then("^User click on the New Account$") public void
	  user_click_on_the_New_Account() { newaccount.click_ON_New_Accnt(); }
	  
	  @Then("^User fill up the form entering \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$"
	  ) public void user_fill_up_the_form_entering_and_and_and_and_and_and(String
	  accountTitle, String des, String amount, String acctNum, String contName,
	  String phoneNum, String webSite) { newaccount.New_Account_Add(accountTitle,
	  des, amount, acctNum, contName, phoneNum, webSite); }
	  
	  @Then("^User should be able to submit the data$") public void
	  user_should_be_able_to_submit_the_data() { newaccount.Click_Sub_But(); }
	  
	  @Then("^User should land on Accounts_Title_Page$") public void
	  User_should_land_on_Accounts_Title_Page() throws IOException { String
	  expectedTitle = "Accounts- iBilling"; String actualTitle =
	  newaccount.getPageTitle(); Assert.assertEquals(expectedTitle, actualTitle);
	  newaccount.TakesScreenshotatEndofTest(driver); }
	 

	@After
	public void afterRun() {
		driver.close();
		driver.quit();
	}
}

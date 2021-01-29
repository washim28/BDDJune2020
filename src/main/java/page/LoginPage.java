package page;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "username")
	WebElement User_Name_Element;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement Password_Element;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), 'Sign in')]")
	WebElement Signin_Button_Element;

	public void enterUserName(String userName) {
		User_Name_Element.sendKeys(userName);
	}

	public void enterPassword(String password) {
		Password_Element.sendKeys(password);
	}

	public void clickSinginButton() {
		Signin_Button_Element.click();
	}

	public void Login(String userName, String password) {
		User_Name_Element.sendKeys(userName);
		Password_Element.sendKeys(password);
		Signin_Button_Element.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}
	public void TakesScreenshotatEndofTest(WebDriver driver) throws IOException {
		  TakesScreenshot ts = ((TakesScreenshot) driver); File sourceFile =
		  ts.getScreenshotAs(OutputType.FILE); FileUtils.copyFile(sourceFile, new
		  File("user" + "/secreenshots/" + System.currentTimeMillis() + "png")); }
}

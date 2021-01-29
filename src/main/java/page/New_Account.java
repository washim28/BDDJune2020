
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

public class New_Account extends BasePage{
	WebDriver driver;
	int randomNum = randomNumGenerator();
	
	public New_Account(WebDriver driver) {
		this.driver = driver;
	}
	@FindBy(how = How.XPATH, using = "//span[contains (text() , 'Bank & Cash')]")
	WebElement BankAndCash;
	@FindBy(how = How.XPATH, using = "//a[contains (text() , 'New Account')]")
	WebElement New_Account; 
	@FindBy(how = How.XPATH, using = "//input[@name = 'account']")
	WebElement Account_Title;
	@FindBy(how = How.XPATH, using = "//input[@name = 'description']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//input[@name = 'balance']")
	WebElement Initial_Balance;
	@FindBy(how = How.XPATH, using = "//input[@name = 'account_number']")
	WebElement Account_Number;
	@FindBy(how = How.XPATH, using = "//input[@name = 'contact_person']")
	WebElement Contact_Person;
	@FindBy(how = How.XPATH, using = "//input[@name = 'contact_phone']")
	WebElement Phone_Number;
	@FindBy(how = How.XPATH, using = "//input[@name = 'ib_url']")
	WebElement Internet_Banking_URL;
	@FindBy(how = How.XPATH, using = "//button[@class= 'btn btn-primary']")
	WebElement Submit_Button;


public void click_ON_Bank_and_Cash() {
	waitForElement(driver, 5, BankAndCash);
	BankAndCash.click();
}
public void click_ON_New_Accnt() {
	waitForElement(driver, 5, BankAndCash);
	New_Account.click();
}

public void Enter_Accnt_Title(String accountTitle) {
	Account_Title.sendKeys(randomNum + accountTitle);
}
public void enter_descrip(String des) {
	Description.sendKeys(randomNum + des);
}
public void enter_Init_Balance(String amount) {
	Initial_Balance.sendKeys(amount);
}
public void enter_Accnt_Num(String acctNum) {
	Account_Number.sendKeys(acctNum);
}
public void enter_Contact_Name(String contName) {
	Contact_Person.sendKeys(contName);
}
public void enter_Phone_Num(String phoneNum) {
	Phone_Number.sendKeys(phoneNum);
}
public void enter_Url(String webSite) {
Internet_Banking_URL.sendKeys(webSite + randomNum);
}
public void Click_Sub_But() {
	Submit_Button.click();
	waitForElement(driver, 2, Submit_Button);
}

public void New_Account_Add(String accountTitle, String des, String amount, String acctNum, String contName, String phoneNum, String webSite) {
	Account_Title.sendKeys(randomNum + accountTitle);
	Description.sendKeys(randomNum + des);;
	Initial_Balance.sendKeys(amount);
	Account_Number.sendKeys(acctNum);
	Contact_Person.sendKeys(contName + randomNum);
	Phone_Number.sendKeys(phoneNum);
	Internet_Banking_URL.sendKeys(webSite + randomNum);
}

public String getPageTitle() {
	return driver.getTitle();
}

	  public void TakesScreenshotatEndofTest(WebDriver driver) throws IOException {
	  TakesScreenshot ts = ((TakesScreenshot) driver); File sourceFile =
	  ts.getScreenshotAs(OutputType.FILE); FileUtils.copyFile(sourceFile, new
	  File("user" + "/secreenshots/" + System.currentTimeMillis() + "png")); }
	 
}
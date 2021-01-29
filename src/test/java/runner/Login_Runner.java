package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
  features = "classpath:features",
  glue = "steps",
  tags = "@Add_New_Account",
  monochrome = true,
  dryRun = false,
  plugin = {
    "pretty",
    "html:target/cucumber",
    "json:target/cucumber.json",
  }
  )


public class Login_Runner {

}

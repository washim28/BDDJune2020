$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash_New_Account.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Bank and Cash Adding New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-adding-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "User should be able to log in with valid credentials (Making Variables work as Placeholders",
  "id": "techfios-bank-and-cash-adding-new-account-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Add_New_Account"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#When User enter the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 12,
      "value": "#Then User should be able to see the Dash_Board Page"
    }
  ],
  "line": 13,
  "name": "User clicks on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering \"\u003cAccount_Title\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitial_Balance\u003e\" and \"\u003cAccount_Number\u003e\" and \"\u003cContact_Person\u003e\" and \"\u003cPhone\u003e\" and \"\u003cInternet Banking URL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should be able to submit the data",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should land on Accounts_Title_Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-adding-new-account-functionality;;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "Account_Title",
        "Description",
        "initial_Balance",
        "Account_Number",
        "Contact_Person",
        "Phone",
        "Internet Banking URL"
      ],
      "line": 20,
      "id": "techfios-bank-and-cash-adding-new-account-functionality;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Check Account",
        "New Account",
        "10000",
        "5652369856",
        "John Doe",
        "7526934529",
        "https://www.td.com/us/en/personal-banking/"
      ],
      "line": 21,
      "id": "techfios-bank-and-cash-adding-new-account-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7965561800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given User is on the techfios loginpage"
    }
  ],
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDef.User_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 1398875300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "User should be able to log in with valid credentials (Making Variables work as Placeholders",
  "id": "techfios-bank-and-cash-adding-new-account-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Add_New_Account"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#When User enter the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 12,
      "value": "#Then User should be able to see the Dash_Board Page"
    }
  ],
  "line": 13,
  "name": "User clicks on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering \"Check Account\" and \"New Account\" and \"\u003cInitial_Balance\u003e\" and \"5652369856\" and \"John Doe\" and \"7526934529\" and \"https://www.td.com/us/en/personal-banking/\"",
  "matchedColumns": [
    2,
    3,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should be able to submit the data",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should land on Accounts_Title_Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "StepsDef.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 1625266100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 9121300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.user_clicks_on_Bank_and_Cash()"
});
formatter.result({
  "duration": 124856700,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.user_click_on_the_New_Account()"
});
formatter.result({
  "duration": 679427200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Account",
      "offset": 32
    },
    {
      "val": "New Account",
      "offset": 52
    },
    {
      "val": "\u003cInitial_Balance\u003e",
      "offset": 70
    },
    {
      "val": "5652369856",
      "offset": 94
    },
    {
      "val": "John Doe",
      "offset": 111
    },
    {
      "val": "7526934529",
      "offset": 126
    },
    {
      "val": "https://www.td.com/us/en/personal-banking/",
      "offset": 143
    }
  ],
  "location": "StepsDef.user_fill_up_the_form_entering_and_and_and_and_and_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 519466400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.user_should_be_able_to_submit_the_data()"
});
formatter.result({
  "duration": 21245996400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //button[@class\u003d \u0027btn btn-primary\u0027]\u0027 (tried for 2 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat page.BasePage.waitForElement(BasePage.java:22)\r\n\tat page.New_Account.Click_Sub_But(New_Account.java:76)\r\n\tat steps.StepsDef.user_should_be_able_to_submit_the_data(StepsDef.java:74)\r\n\tat ✽.Then User should be able to submit the data(features/BankAndCash_New_Account.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d \u0027btn btn-primary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-GQ48109\u0027, ip: \u0027192.168.86.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Chadni\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50012}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 303fb12f0e083fcec7fa56449b757b3c\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d \u0027btn btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat page.BasePage.waitForElement(BasePage.java:22)\r\n\tat page.New_Account.Click_Sub_But(New_Account.java:76)\r\n\tat steps.StepsDef.user_should_be_able_to_submit_the_data(StepsDef.java:74)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepsDef.User_should_land_on_Accounts_Title_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3112950900,
  "status": "passed"
});
});
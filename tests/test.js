var loginPage = require('./LoginPage.js');

var origFn = browser.driver.controlFlow().execute;
	browser.driver.controlFlow().execute = function () {
		var args = arguments;
		// queue 100ms wait
		origFn.call(browser.driver.controlFlow(), function () {
		return protractor.promise.delayed(200);   // here we can adjust the execution speed
		});
		return origFn.apply(browser.driver.controlFlow(), args);
	};

describe("Weather app suite",function(){
    beforeEach(function(){
         browser.get("http://localhost:8080/WeatherApp.html");

    });

    afterEach(function(){
        console.log("Test case is completed...");

    });


    it("Test Login click by Page Object With Hyderabad",function(){
       
        loginPage.clickLogin().
                  inputUserId("Siva").
                  inputPassword("Allu").
                  login().
                  selectCity("Hyderabad").
                  isCity("Hyderabad").
                  isClimate("haze");


        browser.sleep(2000);
    });

    it("Test Login click by Page Object With Perth",function(){
       
        loginPage.clickLogin().
                  inputUserId("Siva").
                  inputPassword("Allu").
                  login().
                  selectCity("Perth").
                  isCity("Perth").
                  isClimate("haze");


        browser.sleep(2000);
    });

});







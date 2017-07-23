var homePage = require('./homePage.js');
var origFn = browser.driver.controlFlow().execute;
	browser.driver.controlFlow().execute = function () {
		var args = arguments;
		// queue 100ms wait
		origFn.call(browser.driver.controlFlow(), function () {
		return protractor.promise.delayed(200);   // here we can adjust the execution speed
		});
		return origFn.apply(browser.driver.controlFlow(), args);
	};


describe("Weather App suite",function(){
	beforeEach(function(){
		browser.get("http://localhost:8080/WeatherApp.html");

	});

	xit("Login",function(){
		var userId = "Siva";
		var password = "Allu";
		
		element(by.css('[data-target ="#myModal"]')).click();
		element(by.model("lCtrl.userName")).sendKeys(userId);
		element(by.model("lCtrl.password")).sendKeys(password);
	    element(by.buttonText("Login")).click();
		element(by.model("wCtrl.selectedCity")).all(by.css('option[label="Hyderabad"]')).click();
		

		var allRows = element.all(by.css("div[ng-show='wCtrl.weatherData.main'] .row"));
		allRows.get(0).element(by.css(".ng-binding")).getText().then(function(text){

			console.log("City = " + text);
		});

		allRows.get(2).element(by.css(".ng-binding")).getText().then(function(text){

			console.log("climate = " + text);
		});

		expect(allRows.get(0).element(by.css(".ng-binding")).getText()).toBe("Hyderabad");
		expect(allRows.get(2).element(by.css(".ng-binding")).getText()).toBe("haze");
		
		

		
	/*	var allRows = element(by.css("[ng-show = 'wCtrl.weatherData.main']")).all(by.css("div [class='row']"));
		var cityRow = allRows[0];
		console.log(cityRow);
		element(cityRow).element((by.css("[class='ng-binding']"))).getText().then(function(text){
			console.log(text);
		});*/

		browser.sleep(3000);
	});

	xit("Login",function(){
		var userId = "Siva";
		var password = "Allu";
		
		element(by.css('[data-target ="#myModal"]')).click();
		element(by.model("lCtrl.userName")).sendKeys(userId);
		element(by.model("lCtrl.password")).sendKeys(password);
	    element(by.buttonText("Login")).click();
		element(by.model("wCtrl.selectedCity")).all(by.css('option[label="Hyderabad"]')).click();
		

		var allRows = element.all(by.xpath("//div[@ng-show='wCtrl.weatherData.main']/div"));
		allRows.get(0).element(by.css(".ng-binding")).getText().then(function(text){

			console.log("City = " + text);
		});

		allRows.get(2).element(by.css(".ng-binding")).getText().then(function(text){

			console.log("climate = " + text);
		});

		expect(allRows.get(0).element(by.css(".ng-binding")).getText()).toBe("Hyderabad");
		expect(allRows.get(2).element(by.css(".ng-binding")).getText()).toBe("haze");
		

		browser.sleep(3000);
	});

	it("Login",function(){
		var userId = "Siva";
		var password = "Allu";
		homePage.gotoLoginPage().
				 keyUserId(userId).
				 keyPassword(password).
				 clickLogin().
				 selectCity("Perth").
				 isCity("Perth").
				 isClimate("clear sky");
		

		browser.sleep(3000);
	});
	
});
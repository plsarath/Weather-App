var weatherAppPage = require("./WeatherAppPage.js");

var LoginPage = function(){
    this.clickLogin = function(){
         element(by.css('[data-target ="#myModal"]')).click();
         return this;

    }

    this.inputUserId = function(userId){

          element(by.model("lCtrl.userName")).sendKeys(userId);
          return this;
    }

    this.inputPassword = function(password){

        element(by.model("lCtrl.password")).sendKeys(password);
        return this;
    }

    this.login = function(){

         element(by.buttonText("Login")).click();
         return weatherAppPage;
    }

}

module.exports = new LoginPage();
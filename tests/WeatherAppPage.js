var WeatherAppPage = function(){
    this.selectCity = function(city){
        var cityExpression = 'option[label="{{city}}"]'.replace('{{city}}',city);
        element(by.model("wCtrl.selectedCity")).all(by.css(cityExpression)).click();
        return this;

    }

    this.isCity = function(city){
         var allRows = element.all(by.xpath("//div[@ng-show='wCtrl.weatherData.main']/div"));
        var cityRow = allRows.get(0);

        expect(cityRow.element(by.css(".ng-binding")).getText()).toBe(city);
        return this;
    }
    this.isClimate = function(climate){
         var allRows = element.all(by.xpath("//div[@ng-show='wCtrl.weatherData.main']/div"));
           var climateRow = allRows.get(2);

        expect(climateRow.element(by.css(".ng-binding")).getText()).toBe(climate);
        return this;
    }


}

module.exports = new WeatherAppPage();
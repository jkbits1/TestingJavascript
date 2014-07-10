describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });

    it("F85 to C", function() {

        var result = convertFahrenheitToCelsius(85);

        expect(result).toEqual('29.4');
    });
  });
});

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

      it("should convert 32 C to 89.6 F ", function () {

          var result = convertCelsiusToFahrenheit(32);

          expect(result).toEqual('89.6');
      });

      it("should convert 52 C to 125.6 F ", function () {

          var result = convertCelsiusToFahrenheit(52);

          expect(result).toEqual('125.6');
      });

  });

    describe("Weights", function() {
        it("should convert 1lb to 0.45kg ", function() {

            var result = convertPoundsToKilos(1);

            expect(result).toEqual('0.45');
        });

        it("should convert 2.5lb to 1.13kg ", function() {

            var result = convertPoundsToKilos(2.5);

            expect(result).toEqual('1.13');
        });
    });

    describe("Volumes", function() {

        it("should convert 1 litre to 0.22 gallons", function() {

            var result = convertLitresToGallons(1);

            expect(result).toEqual('0.22');
        });
        it("should convert 3 litres to 0.66 gallons", function() {

            var result = convertLitresToGallons(3);

            expect(result).toEqual('0.66');
        });
    });
});

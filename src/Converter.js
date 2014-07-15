/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code

    var celsius = (temperature - 32)/ 1.8;

    return celsius.toFixed(1);
}

function convertCelsiusToFahrenheit(temperature) {

    var fahrenheit = temperature * 1.8 + 32;

    return fahrenheit.toFixed(1);
}

function convertPoundsToKilos(pounds) {

    var kilos = pounds * 0.45359237;

    return kilos.toFixed(2);
}

function convertLitresToGallons(litres) {

    var gallons = litres * 0.22;

    return gallons.toFixed(2);
}
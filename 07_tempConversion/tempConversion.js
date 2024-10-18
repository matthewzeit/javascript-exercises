const convertToCelsius = function(tempInFahrenheit) {
  let Celsius = (tempInFahrenheit - 32) * (5 / 9);
  Celsius = Celsius + "";
  if (Celsius.indexOf('.') >= 0) {
    Celsius = Number(Celsius);
    Celsius = Celsius.toFixed(1);
    return Number(Celsius);
  }
  Celsius = Number(Celsius);
  return Celsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let Fahrenheit = (tempInCelsius * (9 / 5) + 32);
  Fahrenheit = Fahrenheit + "";
  if (Fahrenheit.indexOf('.') >= 0) {
    Fahrenheit = Number(Fahrenheit);
    Fahrenheit = Fahrenheit.toFixed(1);
    return Number(Fahrenheit);
  }
  Fahrenheit = Number(Fahrenheit);
  return Fahrenheit;
};

console.log(convertToCelsius(34));
console.log(convertToFahrenheit(35));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

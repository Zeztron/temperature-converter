const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function convertCelcius() {
  const celcius = parseFloat(celciusInput.value);
  const fahrenheit = celcius * (9 / 5) + 32;
  const kelvin = celcius + 273.15;
  fahrenheitInput.value = roundNum(fahrenheit);
  kelvinInput.value = roundNum(kelvin);
}

function convertFahrenheit() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celcius = (fahrenheit - 32) * (5 / 9) ;
    const kelvin = (fahrenheit + 459.67) * 5 / 9;
    celciusInput.value = roundNum(celcius);
    kelvinInput.value = roundNum(kelvin);
}

function convertKelvin() {
    const kelvin = parseFloat(kelvinInput.value);
    const celcius = kelvin - 273.15;
    const fahrenheit = 9 / 5 * (kelvin - 273) + 32;
    celciusInput.value = roundNum(celcius);
    fahrenheitInput.value = roundNum(fahrenheit);
}

function main() {
    celciusInput.addEventListener("input", convertCelcius);
    fahrenheitInput.addEventListener("input", convertFahrenheit);
    kelvinInput.addEventListener("input", convertKelvin);
}

main();



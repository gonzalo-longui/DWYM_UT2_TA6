function convertToCelsius(temp) {
    let tempCelsius = ((temp - 32) / 1.8).toFixed(1);
    console.log(tempCelsius);
}

function convertToFahrenheit(temp) {
    let tempFahrenheit = ((temp * 1.8) + 32).toFixed(1);
    console.log(tempFahrenheit);
}

let tempC = 20;
let tempF = 70;

convertToCelsius(tempF);
convertToFahrenheit(tempC);
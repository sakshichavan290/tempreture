function validateInput() {
    const input = document.getElementById('temperatureInput');
    const value = input.value;
    if (isNaN(value)) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = '';
    }
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const selectedType = document.getElementById('temperatureType').value;
    const resultSpan = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultSpan.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;

    if (selectedType === 'Celsius') {
        resultSpan.textContent = temperature.toFixed(2);
    } else if (selectedType === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultSpan.textContent = convertedTemperature.toFixed(2);
    } else if (selectedType === 'Kelvin') {
        convertedTemperature = temperature - 273.15;
        resultSpan.textContent = convertedTemperature.toFixed(2);
    }
}

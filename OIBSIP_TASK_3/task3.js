function convertTemperature() {
    const inputElement = document.getElementById('temperature-input');
    const unitElement = document.getElementById('unit-select');
    const resultElement = document.getElementById('result');
    let errorElement = document.getElementById("errorMsg");

    const temperature = parseFloat(inputElement.value);
    const selectedUnit = unitElement.value;

    if (isNaN(temperature)) {
        errorElement.textContent = 'Please enter a valid temperature.';
        resultElement.value = "";
        return;
    }

    let convertedTemperature;
    switch (selectedUnit) {
        case 'celsius':
            convertedTemperature = temperature;
            break;
        case 'fahrenheit':
            convertedTemperature = (temperature * 9 / 5) + 32;
            break;
        case 'kelvin':
            convertedTemperature = temperature + 273.15;
            break;
        default:
            errorElement.textContent = 'Invalid unit selected.';
            return;
    }

    resultElement.value = Math.round(convertedTemperature, 2);
}
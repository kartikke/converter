document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    if (!isNaN(temperature)) {
        let convertedTemperature, resultUnit;

        if (unit === 'celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = 'Fahrenheit';
        } else {
            convertedTemperature = (temperature - 32) * 5/9;
            resultUnit = 'Celsius';
        }

        document.getElementById('result').textContent = `${temperature}° ${unit} is ${convertedTemperature.toFixed(2)}° ${resultUnit}`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number.';
    }
});

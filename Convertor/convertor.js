const selectedBase = document.getElementById('selectedBase');
const enteredValue = document.getElementById('enteredValueInput');
const resultBase = document.getElementById('resultBase');
const resultValue = document.getElementById('resultValueInput');
const button = document.getElementById('button');

button.addEventListener('click', convertValue);

function convertValue() {
    let valueEntered = enteredValue.value.trim(); // Trim whitespace from input

    // Check if the entered value is valid for the selected base
    if (!isValidValue(valueEntered, selectedBase.value)) {
        alert('Invalid input for the selected base.');
        return; // Exit the function if input is invalid
    }

    switch (selectedBase.value) {
        case "DECIMAL":
            convertDecimal(valueEntered, resultBase.value);
            break;
        case "HEXADECIMAL":
            convertHexadecimal(valueEntered, resultBase.value);
            break;
        case "BINARY":
            convertBinary(valueEntered, resultBase.value);
            break;
        case "OCTAL":
            convertOctal(valueEntered, resultBase.value);
            break;
        default:
            alert('Invalid base selection.');
    }
}

function isValidValue(value, base) {
    switch (base) {
        case "DECIMAL":
            return /^\d+$/.test(value); 
        case "HEXADECIMAL":
            return /^[0-9A-Fa-f]+$/.test(value); 
        case "BINARY":
            return /^[01]+$/.test(value); 
        case "OCTAL":
            return /^[0-7]+$/.test(value); 
        default:
            return false;
    }
}

function convertDecimal(value, toBase) {
    switch (toBase) {
        case "HEXADECIMAL":
            resultValue.value = parseInt(value, 10).toString(16).toUpperCase();
            break;
        case "BINARY":
            resultValue.value = parseInt(value, 10).toString(2);
            break;
        case "OCTAL":
            resultValue.value = parseInt(value, 10).toString(8);
            break;
        default:
            alert('Invalid conversion.');
    }
}

function convertHexadecimal(value, toBase) {
    let decimalValue = parseInt(value, 16);
    switch (toBase) {
        case "DECIMAL":
            resultValue.value = decimalValue.toString(10);
            break;
        case "BINARY":
            resultValue.value = decimalValue.toString(2);
            break;
        case "OCTAL":
            resultValue.value = decimalValue.toString(8);
            break;
        default:
            alert('Invalid conversion.');
    }
}

function convertBinary(value, toBase) {
    let decimalValue = parseInt(value, 2);
    switch (toBase) {
        case "DECIMAL":
            resultValue.value = decimalValue.toString(10);
            break;
        case "HEXADECIMAL":
            resultValue.value = decimalValue.toString(16).toUpperCase();
            break;
        case "OCTAL":
            resultValue.value = decimalValue.toString(8);
            break;
        default:
            alert('Invalid conversion.');
    }
}

function convertOctal(value, toBase) {
    let decimalValue = parseInt(value, 8);
    switch (toBase) {
        case "DECIMAL":
            resultValue.value = decimalValue.toString(10);
            break;
        case "HEXADECIMAL":
            resultValue.value = decimalValue.toString(16).toUpperCase();
            break;
        case "BINARY":
            resultValue.value = decimalValue.toString(2);
            break;
        default:
            alert('Invalid conversion.');
    }
}

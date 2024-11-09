// app.js

// Function to perform calculation
function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    document.getElementById('result').textContent = result;
}

// Function to change the text
function changeText() {
    const textElements = document.querySelectorAll('.division');
    const newText = ["Bye", "Good Bye", "To", "Your", "Class"];
    
    textElements.forEach((element, index) => {
        if (newText[index]) {
            element.textContent = newText[index];
        }
    });
}

// Event listeners
document.getElementById('calculate').addEventListener('click', performCalculation);
document.getElementById('change_text').addEventListener('click', changeText);

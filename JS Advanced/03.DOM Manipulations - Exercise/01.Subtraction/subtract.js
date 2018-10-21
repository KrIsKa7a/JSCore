function subtract() {
    let resultDiv = document.getElementById("result");

    let firstNumber = +document.getElementById("firstNumber").value;
    let secondNumber = +document.getElementById("secondNumber").value;

    let result = firstNumber - secondNumber;
    resultDiv.textContent = result;
}
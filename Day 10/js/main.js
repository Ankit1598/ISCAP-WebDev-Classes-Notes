let prevOperator;
let runningTotal = 0;
let buffer = "0";

function buttonClick(value) {
	if (isNaN(value)) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	document.querySelector(".screen").innerText = buffer;
}

function handleSymbol(value) {
	switch (value) {
		case "C":
			runningTotal = 0;
			buffer = "0";
			break;
		case "←":
			if (buffer.length === 1) {
				buffer = "0";
			} else {
				buffer = buffer.substring(0, buffer.length - 1);
			}
			break;
		case "=":
			if (prevOperator === null) {
				return;
			}
			handleOperation(parseInt(buffer));
			prevOperator = null;
			buffer = runningTotal;
			runningTotal = 0;
			break;
		case "+":
		case "−":
		case "÷":
		case "×":
			handleMath(value);
			break;
	}
}

function handleMath(value) {
	if (buffer === "0") {
		return;
	}

	const intBuffer = parseInt(buffer);
	if (runningTotal === 0) {
		runningTotal = intBuffer;
	} else {
		handleOperation(intBuffer);
	}

	prevOperator = value;
	buffer = "0";
}

function handleOperation(value) {
	if (prevOperator === "+") {
		runningTotal += value;
	} else if (prevOperator === "−") {
		runningTotal -= value;
	} else if (prevOperator === "×") {
		runningTotal *= value;
	} else {
		runningTotal /= value;
	}
}

function handleNumber(value) {
	if (buffer === "0") {
		buffer = value;
	} else {
		buffer += value;
	}
}

function init() {
	document
		.querySelector(".calc-buttons")
		.addEventListener("click", function (e) {
			buttonClick(e.target.innerText);
		});
}

init();

// uncomment the console.logs to see the output

// simple js code
let monthlyRent = 500;
const MONTHS_IN_A_YEAR = 12;

const yearlyRent = monthlyRent * MONTHS_IN_A_YEAR;
// console.log(yearlyRent)
/*==================================*/

let caseType; // camel casing
let case_type; // snake casing
const CASE_TYPE = null; // screaming case

// let const = 500;    // never use keywords as variables

/*==================================*/

// Strings
let firstName = "John";
let lastName = "Kirkman";

// String concatenation
let greetings = "Welcome " + firstName + " " + lastName + " to JavaScript";

// console.log(greetings);

// String Formatting
let welcome = `Welcome ${firstName} ${lastName} to JavaScript`;

// console.log(welcome);

/*==================================*/

// Booleans

let isThereAnyDoubts = true;
let isTodaySaturday = false;

// console.log(isThereAnyDoubts, isTodaySaturday)

/*==================================*/

// Numbers

let valueOfPi = 3.142;

// console.log(valueOfPi)

/*==================================*/

// type checking

let arr = [1, 2, 3];
let dict = { 1: "asd" };

// console.log(typeof arr, typeof dict);

/*==================================*/

// Flow Control

let isItValid = true;
let msg = "";

if (isItValid) {
	msg = "Yes its valid";
} else {
	msg = "Nope its not valid";
}

// console.log(msg);

// for Loop

for (let i = 0; i < 10; i++) {
	// console.log(i);
}

// while Loop
let i = 0;
while (i < 10) {
	// console.log(i);
	i++;
}

// else if Loop

let num = 2;
let status = "";

if (num > 5) {
	status = "Its Big";
} else if (num < 2) {
	status = "Its Small";
} else {
	status = "Its Between";
}

// console.log(status);

/*==================================*/

// increments

let j = 2;
// j = j + 1;
j += 10; // j = j + 10
// j++

/*==================================*/

// function
function printHello() {
	console.log("Hello");
}
function printHello1(name) {
	console.log(`Hello ${name}`);
}
function printHello2(firstName, lastName) {
	console.log(`Hello ${firstName} ${lastName}`);
}
function add(num1, num2) {
	return num1 + num2;
}

// printHello();
// printHello1("John");
// printHello2("John", "Kirkman");
const addition = add(1, 2);
// console.log(addition);

/*==================================*/

// scope

let myVar = 5; // global declaration
if (true) {
	let myVar2 = 10; // local declaration
}
// console.log(myVar)

/*==================================*/

let courseName = "JavaScript";

// console.log(courseName.substr(4, 6))		// substr(startIndex, length)
// console.log(courseName.substring(4, 5))		// substring(startIndex, endIndex)

let pi = 3.14;

// console.log(Math.floor(pi));
// console.log(Math.ceil(pi));
// console.log(Math.sqrt(pi));

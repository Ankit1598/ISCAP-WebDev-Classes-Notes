// Objects

//simple object
const person = {
	firstName: "Tom",
	lastName: "Kirkman",
	state: "USA",
	gender: "Male",
};
// console.log(person);
// console.log(person.firstName);

// function inside object
const person1 = {
	firstName: "Tom",
	lastName: "Kirkman",
	state: "USA",
	gender: "Male",
	getName() {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};
// console.log(person1);
// person1.getName();

// nested objects
const person2 = {
	user1: {
		firstName: "Tom",
		lastName: "Kirkman",
		state: "USA",
		gender: "Male",
	},
	user2: {
		firstName: "John",
		lastName: "Kirkman",
		state: "USA",
		gender: "Male",
	},
};
// console.log(person2.user1.firstName);
// console.log(person2.user2.firstName);

/* =========================================*/

// array
const arr = [1, 2, 10, 3, 20];

// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr.join(" "));
// arr.push("1");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// loop
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// arr.forEach(function (val) {
// 	console.log(val);
// });

// manipulate first array and store the value in other array
// const arr2 = arr.map(function (val) {
// 	return val * 2;
// });
// console.log(arr2);

// sort
// console.log(
// 	arr.sort(function (a, b) {
// 		return a - b;
// 	})
// );

/* =========================================*/

// AND (&&), OR(||)
// && => if any False then result is False
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// || => if any True then result is True
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

let hour = 12;
let minute = 30;
let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
// 	console.log("The office is closed.");
// }

// if (hour === 12 && minute === 30) {
// 	console.log("The time is 12:30");
// }

/* =========================================*/

// DOM => Document Object Model

//changing color of div
let box = document.querySelector(".redSquare");
let boxText = document.querySelector(".redSquare").querySelector("h3");
box.style.backgroundColor = "blue";
box.style.borderRadius = "33px";
// box.classList.add("borderBlack");
// box.classList.remove("borderDarkTurquoise");

// EventListeners
box.addEventListener("click", function () {
	box.classList.toggle("borderBlack");
	boxText.classList.toggle("darkturquoise");

	box.classList.toggle("borderDarkTurquoise");
	boxText.classList.toggle("black");
});

let copy = document.querySelector(".copy");
let paste = document.querySelector(".paste");
copy.addEventListener("keyup", function (e) {
	paste.innerHTML = copy.value;
	// paste.innerHTML = e.target.value;
});

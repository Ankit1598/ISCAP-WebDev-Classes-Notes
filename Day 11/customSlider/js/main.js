const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const nodes = document.querySelectorAll(".img");
let currentNode = 0;

function nextImg() {
	prevBtn.disabled = false;
	nodes[currentNode].classList.remove("active");
	currentNode++;
	nodes[currentNode].classList.add("active");
	console.log(currentNode);
	if (currentNode + 1 === nodes.length) {
		nextBtn.disabled = true;
	}
}

function prevImg() {
	nextBtn.disabled = false;
	nodes[currentNode].classList.remove("active");
	currentNode--;
	nodes[currentNode].classList.add("active");
	console.log(currentNode);
	if (currentNode === 0) {
		prevBtn.disabled = true;
	}
}

function init() {
	prevBtn.addEventListener("click", function () {
		prevImg();
	});
	nextBtn.addEventListener("click", function () {
		nextImg();
	});
}

init();

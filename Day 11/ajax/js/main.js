const API = "https://dog.ceo/api/breeds/image/random";
const dogs = document.querySelector(".dogs");
const addDogBtn = document.querySelector(".addDogs");

function addDog() {
	fetch(API)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			const image = document.createElement("img");
			image.src = data.message;
			image.alt = "Random Dog";

			dogs.appendChild(image);
		});
}

addDogBtn.addEventListener("click", addDog);

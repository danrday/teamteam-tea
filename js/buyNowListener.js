var button = document.getElementById("buyButton");

function loadProducts () {
	console.log("Button is clicked");
	window.location = "../products.html";
}

button.addEventListener("click", loadProducts)
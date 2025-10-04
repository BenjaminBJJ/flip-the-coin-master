let coinImage = document.getElementById("coin");

function randomCoinSide() {
	const result = Math.random() < 0.5 ? "Heads" : "Tails";
	result == "Heads"
		? (coinImage.src = "/resources/heads.svg")
		: (coinImage.src = "/resources/tails.svg");
	document.querySelector("#result").textContent = result;
}
document.querySelector("#flip-button").addEventListener("click", randomCoinSide);

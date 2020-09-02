// Extenxion Messages qui font plaisir
// Développé par Rix56
function randomNumber(min, max) {
	step1 = max - min + 1;
	step2 = Math.random() * step1;
	result = Math.floor(step2) + min;
	return result;
}
window.onload = function() {
	messages = ["Salut !", "Tu as une bonne mine !", "Tu es beau !", "Je t'aime <3", "Mon coeur fond devant toi", "Sympa ton look !", "Tu as l'air d'aller super bien !", "Moi contre toi = tu gagnes !"]
	index = randomNumber(0, messages.length-1);
	var para = document.querySelector("#changeText");
	para.innerHTML = messages[index];
}
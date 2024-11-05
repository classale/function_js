function calculerPrix(prix) {
	return prix > 100 ? 0.9 * prix : prix;
}
console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80

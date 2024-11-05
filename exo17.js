function comparerNombres(a, b) {
	if (a > b) {
		return "Plus grand";
	} else if (a == b) {
		return "égal";
	} else {
		return "Plus petit";
	}
}
console.log(comparerNombres(5, 10)); // Résultat attendu : "Plus petit"
console.log(comparerNombres(10, 5)); // Résultat attendu : "Plus grand"
console.log(comparerNombres(7, 7)); // Résultat attendu : "Égal"

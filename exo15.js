function conditionnelle(a, b, condition) {
	console.log(condition(a, b));
	return condition(a, b) === true ? a + b : a * b;
}
function estPairEtPositif(x, y) {
	if (x <= 0) return false;
	else if (x % 2 == 1) return false;
	if (y <= 0) return false;
	else if (y % 2 == 1) return false;
	return true;
}

console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produi

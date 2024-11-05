function difference(a, b) {
	let max = Math.max(a, b);
	let min = Math.min(a, b);
	return max - min;
}

console.log(difference(10, 3)); // Résultat attendu : 7

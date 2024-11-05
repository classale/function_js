function filtrerTexte(chaine, filtre) {
	let out = "";
	for (let letter of chaine) {
		out += filtre(letter) == true ? letter : "";
	}
	return out;
}

function estVoyelle(c) {
	return /(a|e|i|o|u|y)/.test(c);
}

console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oou"

function transformerTexte(texte, transformation) {
	let out = "";
	for (let letter of texte) {
		out += transformation(letter);
	}
	return out;
}

function majuscule(c) {
	return c.toLocaleUpperCase();
}

function avecPoint(c) {
	return `${c}.`;
}

console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."

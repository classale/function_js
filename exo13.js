function appliquerTroisFois(valeur, fonction) {
	let nombre = valeur;
	for (let i = 0; i < 3; i++) {
		nombre = fonction(nombre);
	}
	return nombre;
}

function incrementer(x) {
	return x + 1;
}

console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8

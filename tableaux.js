//exo1
let annee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(annee);

//exo2
let annee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(annee[2]);

//exo3
let annee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(annee[4]);

//exo4
let annee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
annee.splice(7, 1, 'août');
console.log(annee);

//exo5
var arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
console.log(arr);

//exo6
var arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
console.log(arr[59]);

//exo7
var arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
arr[51] = 'Marne';
console.log(arr);

//exo8
let annee = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
for (let i = 0; i < annee.length; i++) {
    console.log(annee[i]);
}

//exo9
let arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
for (n in arr) {
    console.log(arr[n]);
}

//exo10
let arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
for (n in arr) {
    console.log('Le département ' + arr[n] + ' a le numéro ' + n);
}
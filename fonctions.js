//exo1
function testNum(a) {
    var a;
    if (a === 10) {
        result = 'true';
    } else {
        result = 'false';
    }
    return result;
}
console.log(testNum(10));

//exo2
var pays = ['France', 'Angleterre', 'Japon', 'USA'];
console.log(pays);

//exo3
var ville = ['Paris', 'Marseille', 'Lyon,'];
var region = ['Ile de France', 'Occitanie', 'Rhone-Alpe.'];
console.log(ville + region);

//exo4
function compareNum(b, c) {
    if (b < c) {
        result = "b < c";
    } else if (b > c) {
        result = "b > c";
    } else {
        result = "b = c";
    }
    return result;
}
console.log(compareNum(2, 1));

//exo5
var number = 1;
var nom = 'Jean-Mouloud';
let moustaches = number + nom;
console.log(moustaches);

//exo6
var nom = 'Ouali';
var prenom = 'Kevin';
var age = 39;

function plop() {
    let npa = "Bonjour " + nom + prenom + " tu as " + age + " ans";
    console.log(npa);
}
plop();

//exo7
var age = ['mineur', 'majeur'];
var genre = ['homme', 'femme'];

function reloue() {
    let chiante = age + genre;
    if (age = 'mineur', genre = 'homme') {
        result = 'Vous êtes un homme et vous êtes mineur';
    } else if (age = 'homme', genre = 'majeur') {
        result = 'Vous êtes un homme et vous êtes majeur';
    } else if (age = 'mineur', genre = 'femme') {
        result = 'Vous êtes une femme et vous êtes mineur';
    } else if (age = 'majeur', genre = 'femme') {
        result = 'Vous êtes une femme et vous êtes majeur';
    }
    return result;
}
console.log(femme, majeur);
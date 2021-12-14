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
function Id(age, genre){
    if ( genre == "Homme" ){
        if ( age> 18 ) {
            console.log("Vous etes un Homme et majeur")
        }
        else { console.log("Vous etes un Homme et mineur")}
    }
    else if ( genre == "Femme") {
        if ( age>18 ){
            console.log("Vous etes une Femme Majeur")
        }
        else { console.log("Vous etes une Femme mineure")} 
    }
    else { 
        if ( age>18) {
            console.log("Vous etes ni homme ni une femme et majeur")
        }
        else {console.log("Vous etes ni homme ni une femme et mineur")}
    }

}
Id(2, 'homme');

//exo8

var a = 2;
var b = 4;
var c = 6;
function add() {
    let addition = a + b + c;
    console.log(addition);
}
add();
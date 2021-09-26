var array = [
    'tesoura corta papel',
    'papel cobre veneno',
    'pedra esmaga lagarto',
    'lagarto corta Spock',
    'Spock vaporiza tesoura',
    'tesoura decapita Spock',
    'lagarto come papel',
    'veneno refuta lagarto',
    'Spock vaporiza pedra',
    'veneno esmaga tesoura'
]

var convertorStrng = array.join(" - ")

let sub1 = convertorStrng.replace("esmaga", "quebra");
let sub2 = convertorStrng.replace("lagarto", "tesoura");
let sub3 = convertorStrng.replace("Spock", "papel");
let sub5 = convertorStrng.replace("vaporiza", "embrulha");
let sub6 = convertorStrng.replace("cobre", "embrulha");
let sub7 = convertorStrng.replace("decapita", "corta");
let sub8 = convertorStrng.replace("come", "corta");
let sub9 = convertorStrng.replace("veneno", "pedra");
let sub10 = convertorStrng.replace("refuta", "quebra");

console.log(convertorStrng)



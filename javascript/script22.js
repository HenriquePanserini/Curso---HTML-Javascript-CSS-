var dt = new Date();
let diaSem = dt.getDay();
var dia = dt.getDate();
var mes = dt.getMonth();
let ano = dt.getFullYear();

let meses = new Array("Janeiro", "Fevereiro","")

document.writeln(dia + "/" + mes + "/" + ano);
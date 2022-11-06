//var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
console.log("Calendario:" + '\n')
var calendarioDias = [];

    calendarioDias.push("Terca");
    calendarioDias.push("Quarta");
    calendarioDias.push("Sexta");
    calendarioDias.push("Domingo");
    calendarioDias.push("Quinta");
    calendarioDias.push("Sabado");

    //calendarioDias.pop();
    //calendarioDias.shift();
    calendarioDias.splice(2, 1);
    calendarioDias.splice(4,1);

    console.log(calendarioDias[0]);
    console.log(calendarioDias[1]);
    console.log(calendarioDias[2]);
    console.log(calendarioDias[3]);
    console.log(calendarioDias[4]);
    console.log(calendarioDias[5]);
var diasSemana = [], weekDays = [], semana = [];
/*let num = [5,1,9,7,6,4,2,7,8,1,4,0,9,7];
let lista;

num.sort();
num.reverse();

lista = num.join();

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[5]);
console.log(num[6]);
console.log(num[7]);
console.log(num[8]);
console.log(num[9]);
console.log(num[10]);
console.log(num[11]);
console.log(num[12]);
console.log(num[13]);
*/

diasSemana.push("Domingo");
diasSemana.push("Segunda");
diasSemana.push("Terça");
diasSemana.push("Quarta");
diasSemana.push("Quinta");
diasSemana.push("Sexta");
diasSemana.push("Sabado");
diasSemana.push("Domingo");

weekDays.push("Sunday");
weekDays.push("Monday");
weekDays.push("Tuesday");
weekDays.push("Wednesday");
weekDays.push("Thursday");
weekDays.push("Friday");
weekDays.push("Saturday");
weekDays.push("Sunday");

semana = diasSemana.concat(weekDays);

console.log("tamanho da listra de dias: " + semana.length);
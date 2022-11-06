var dias;

document.writeln("Insira quantidade de dias: ", dias = prompt("Digite valor de dias","Dias"));
document.writeln("<br>");

if(dias > 0 && dias <= 10){
    document.write("dentro do prazo de 10 dias",'<br>');
}else if(dias > 10 && dias <= 20){
    document.write("fora do prazo de 10 dias",'<br>');
}else{
    document.write("Documento nao é mais valido",'<br>');
}
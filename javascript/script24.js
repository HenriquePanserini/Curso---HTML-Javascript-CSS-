function escreva(){
    document.writeln("Funça foi chamada" + '<br>');
}

escreva();

function soma(n1, n2){
    return n1+n2;
}

let res = soma(14, 5)
document.writeln(res + '<br>');

var numeros = new Array(1,5,8,10,9,4,8);

function media(nums){
    var tam = nums.length;
    var soma = 0;
    for(var i=0;i<tam;i++){
        soma+=nums[i];
    }
    return Math.round(soma/tam);
}

document.writeln(media(numeros));
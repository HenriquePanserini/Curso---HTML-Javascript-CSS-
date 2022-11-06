try {
    var num = prompt("Digite um valor: ");
    if(num > 10){
        throw new Error("Valor invalido");
    }
    
    console.log("Valor: " + num);
} catch (ex) {
    console.log("ERRO!" + '\n');
} finally {
    console.log("Exceção de erro executado com sucesso" + '\n');
}
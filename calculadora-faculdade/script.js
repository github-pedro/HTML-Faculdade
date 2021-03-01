function inserirvalor(valor){
    document.painel.equacao.value = document.painel.equacao.value+valor
}
function resultado(){
    var equacao = document.painel.equacao.value;
    if(equacao){
        document.painel.equacao.value = eval(equacao);
    }
}
function limpar(){
    var equacao = document.painel.equacao.value;
    document.painel.equacao.value = equacao.substring(0,equacao.length-1);
}
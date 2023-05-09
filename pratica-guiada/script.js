// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//Function tradicional
function imprimirNome(){
    //bloco de código
    console.log("Olá Mundo!")
}
imprimirNome()

//Expressão de função
const nominho = function(imprimirNomes){
    console.log(`Diga seu apelido: ${imprimirNomes}`)
}
nominho("Suel")
nominho("Coco")
nominho("Dani")


//Function Arrow
const nomear = (nome) =>{
    console.log(`Meu nome é ${nome}!`)
}
nomear("Maxuel")
nomear("Socorro")
nomear("Sartre")

//---------------------------->
const fazerOperacoes = (numero) =>{
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero
    return (`O número ${numero} é par? ${verifica}. Somado com 10  o resultado é ${soma}.
    Multiplicado por ele mesmo o resultado é ${multiplica}`)
}
console.log(fazerOperacoes(12))

//-------------------->
/*const verificaDados = (login, senha) =>{
    loginArmazenado = "max.@gmail.com"
    senhaArmazenada = "123456"
    
    return loginArmazenado === login && senhaArmazenada === senha
}
console.log(verificaDados("max.@gmail.com", "123456"))*/

const verificarDados = (login, senha) =>{
    loginArmazenado = "meulogin@gmail.com"
    senhaArmazenada = "12345"

    return loginArmazenado === login && senhaArmazenada && senha
}
console.log(verificarDados("meug.amil", "3512"))
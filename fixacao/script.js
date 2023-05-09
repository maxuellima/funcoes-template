// Resolva o Exercício de Fixação!
const verificaIdade = (nome, anoNascimento, anoAtual) =>{
    const verificando = anoAtual - anoNascimento
    return (`${nome} é maior de idade? ${verificando >= 18}`)
}
console.log(verificaIdade("Sartre", 1993, 2023))
console.log(verificaIdade("Socorro", 2019, 2023))
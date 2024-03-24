alert("Olá mundo!")
alert("Scripts do Modulo 1")
console.log("Olá mundo 3.0")
let idade = 14 // number
let nome = "Dorival" //string
let city = "São Paulo" //string
let estado = "SP" // string
let logado = true // boolean
let lista = ["farinha","ovo","massa","corante","acucar"] // object
let nomeCompleto = { nome: "Bonieky", idade: 90 } // object

console.log(nome)
console.log(idade)
console.log(city)
console.log(estado)
console.log(lista)
console.log(nomeCompleto)

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof city)
console.log(typeof estado)
console.log(typeof logado)
console.log(typeof lista)
console.log(typeof nomeCompleto)

// Comentário de uma linha só
/* Comentario
de 
varias
linhas */

let carro = "Ferrari"
let bolo = 19.99
let cidade = "São Paulo"

console.log (carro)
console.log (bolo)
console.log (cidade)

// o ; serve para dizer ao javascrip que aquela trecho de codigo nao tem mais instruções, porém ele não é obrigatorio.
// ele se torna obrigatorio quando vc coloca mais de um comando na mesma linha
// let e var servem pra criar variaveis. porém o var funciona em qualquer contexto, ja o let funciona somente para o contexto que ela foi criada
// alem do let e do var, existe o const, porém ele nao permite a troca de valor. É uma variável constante.

let nome2 = "Dorival";
let sobrenome2 = "Marcante";

// voce pode declarar a variavel assim:  let nomeCompleto2 = nome2 + ' ' + sobrenome2; ou usando template string, que fica assim: let nomeCompleto2 = ``
// o que diferencia a declaração de variavel para a template string é o modo de abrir, que usa 2 crases e voce pode rodar codigo java dentro dele, por exemplo:

let nomeCompleto2 = `${nome2} ${sobrenome2}`
let idade2 = 41;
let idadeString = `Idade: ${idade2} anos`;

console.log("Nome: " + nomeCompleto2);
console.log(idadeString)

idade = 20

if (idade == 20) {
    console.log("Você tem 20 anos");
}

// o == no if identifica o valor, sendo ele numero ou string. 
// para verificar se é um numero mesmo e nao uma string, use o ===   if(idade === 20) {etc...}

if (idade == 20) {
    idade = idade + 15
    console.log("Idade adicionada com sucesso!");
    console.log(idade)
}

//uma forma de fazer duas condicionais é essa:

if (idade >=18) {
    if (idade < 60) {
        console.log("Você é um adulto")
    }
}

// ou essa:

if (idade >= 18 && idade < 60) {  //&& faz com que ele aceite duas condicionais ou mais, e pra entrar no codigo, as duas precisam ser atendidas.
    console.log("Você é um adulto")
}

//para que ele aceite uma ou outra condicional, use o comando ||
//Dois traços (||) significa OU e dois e comercial (&&) significa E

if (idade >= 18 || idade < 60) {
    console.log("Você é um adulto")
}

idade = 60;

if (idade < 18) {
    console.log("Você é uma criança.")
} else if (idade >=18 && idade <60) {
    console.log("Você é um adulto.")
} else if (idade >= 60) {
    console.log("Você é um idoso.")
}

let x = 10;
let y = 5;
console.log(x > y)
let w = "10";
let z = 10;
console.log(w === z)
let a = 10;
let b = 5;
console.log(a != b)
let preco = 40.3;
if (preco <= 45){
    console.log("A Carne esta barata")
} else {
    console.log("A carne esta cara")
}

//condicional ternaria determina se uma condição é verdadeira e executa uma ação ou se for falsa, executa outra ação
//ela é identificada pelo sinal de ?, ficando do seguinte modo:  let envio = seMembro ? 2 : 10;
//No exemplo acima, ela verifica se o assinante é membro, Caso seja, ela cobra 2 de frete, caso nao seja, ela cobra 10 de frete

let isMember = true;
let shipping = isMember ? 2 : 10;
console.log(isMember ? 'Você é Membro' : 'Você Não é Membro')
console.log("Frete: " + shipping)

let age = 19;
let isAdult = ((age >=18 && age <60) ? 'Sim' : 'Não');

console.log(isAdult);

//O switch serve para verificar varias opções na variavel

let profession = "policial"

console.log("Profissão: " + profession)

switch (profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua camira será VERMELHA');
        break;
    case 'policial':
        console.log('Sua camisa será AZUL');
        break;
    default:
        console.log('Sua camisa será PRETA')
        break;
}
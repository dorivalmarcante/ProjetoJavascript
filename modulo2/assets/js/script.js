alert("Scripts do Modulo 2")

// Aula 3

function gravity() {
    console.log("A Gravidade do planeta é: ")
    console.log(9.8)
}

gravity()

// Aula 4

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}

somar (10,15)

function nomeCompleto (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Dorival","Marcante");
nomeCompleto("João","Silva");

// Aula 5

function nomeCompleto2(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto2("Bonieky", "Lacerda");
console.log(completo);

// Aula 6

function maiorDeIdade (idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 14;
let verificacao = maiorDeIdade(idade);
if (verificacao) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

// Aula 7

/* Calcule a porcentagem entre 2 numeros.
Exemplo: 25% de 40 é 10
Formula de porcentagem: (y / x) * 100
Uso da função:
*/

function calcPct (x,y) {
    return (y/x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);

// Aula 8

/* Calcule o preço do imóvel
- m2 = 3.000
- se tiver 1 quarto, o m2 é 1x
- se tiver 2 quartos, o m2 é 1.2x
- se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/
function calcularImovel(metragem,quartos) {
    let m2 = 3000;
    if (quartos == 1) {
        return metragem * m2
    } else if (quartos == 2) {
        return metragem * (m2 * 1.2)
    } else if (quartos = 3) {
        return metragem * (m2 * 1.5)
    } 
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);


function calcularImovel2(metragem2,quartos2) {
    let m2 = 3000;
    let preco2 = 0;

    switch (quartos2) {
        case 1:
        default:
            preco2 = metragem2 * m2;
            break;
        case 2:
            preco2 = metragem2 * (m2 * 1.2);
            break
        case 3:
            preco2 = metragem2 * (m2 * 1.5);
            break;
    }

    return preco2;
}


let metragem2 = 123;
let quartos2 = 1;
let preco2 = calcularImovel2(metragem2, quartos2);
console.log(`A casa custa R$ ${preco2}`);

// Aula 09

/* Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario,senha);
if (validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso NEGADO!')
}
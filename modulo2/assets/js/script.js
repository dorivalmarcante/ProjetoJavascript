alert("Scripts do Modulo 2")

// Aula 3 - Como usar uma função

function gravity() {
    console.log("A Gravidade do planeta é: ")
    console.log(9.8)
}

gravity()

// Aula 4 - Passando parametros em uma função

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

// Aula 5 - Retorno da função

function nomeCompleto2(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto2("Bonieky", "Lacerda");
console.log(completo);

// Aula 6 - Função com retorno condicional

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

// Aula 7 - Exercício de funções

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

// Aula 8 - Exercício de funções

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

// Aula 09 - Exercício de funções

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

// Aula 10 - Arrow function

const somar1 = (x, y) => {
   return x + y;
}

const somar2 = (x,y) => x + y;

const sobrenome = sob => 'Dorival ' + sob;

console.log(somar1(10,5));
console.log(somar2(10,5));
console.log(sobrenome('Marcante'));

// Aula 11 - Variáveis dentro de funções

let count = 0;

function add() {
    let count = 0;
    count++;
}

add();
add();
console.log(count)

// Aula 12 - Funções dentro de funções

function addSquares(a,b) {
    function square(x) {
        return x * x;
    }

    const square2 = (x) => x*x;

    let sqrA = square(a);
    let sqrB = square(b);
        
    let sqr2A = square2(a);
    let sqr2B = square2(b);
    return (sqrA + sqrB) + (sqr2A + sqr2B);
}

console.log(addSquares(2, 3));

// Aula 13 - Introdução a Array

let colors = ['blue','red','green'];
console.log(colors[1]);

let nomes = ['Junior','Kelly','Katia'];
let lista = ['Creusa','Dorival',nomes]

console.log(lista);

let lista2 = ['blabla',['xx','yy']];

console.log(lista2);

console.log(lista2[0]);
console.log(lista2[1][0])

let segundo = lista2[1];
console.log(segundo[0])

// Aula 14 - Operações básicas de array

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
]

ingredientes.push('cebola')

console.log(`Total de ingredientes: ${ingredientes.length}`)
console.log(ingredientes)

// Aula 15 - Exercício de array #7

//1. NO array abaixo, qual o numero que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'] ;
console.log('1. ' + carros[1]);

//2. Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log('2. Lista com Audi');
console.log(carros);

//3. Adicione o Volvo na lista
carros.push('Volvo');
console.log('3. Lista com Volvo');
console.log(carros);

//4. Exiba quantos itens tem no array
console.log(`4. Itens no array: ${carros.length}`);

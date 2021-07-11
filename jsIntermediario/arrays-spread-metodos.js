
//Arrays Spread e Metodos
const alunasGama = ["Paula", "Maria", "Estela","Clara"];
//Acessando uma Array através do index
console.log(alunasGama[3]);


//Operandor Spread (...) -> Herda um array criado anteriormente'
const alunasXp = [...alunasGama, "Simara"];
console.log(alunasXp);

for(let i = 0; i < alunasXp.length; i++)
{  console.log(alunasXp[i]); }

//Métodos de interação 
//O Map não modifica o array anterior
alunasXp.map(aluna => console.log(aluna));

// Mais um example
const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const exibeInformações = empresas.map(empresa => `${empresa.nome}`+`CEO: `+`${empresa.CEO}`);
console.log(exibeInformações);

//Método Filter
const numeros = [34,45,67,90,55,75];
//cria um novo array com números impares.
const numeroImpares= numeros.filter(numero=> numero%2!=0);
console.log(numeroImpares);
const numeroPares= numeros.filter(numero=> numero%2===0);
console.log(numeroPares);

//Método SORT- Ordenação de Arrays
const numerosOrdenadosDescrescente = numeros.sort((a,b)=>b-a);
console.log(numerosOrdenadosDescrescente);

//Método REDUCE - reduz o array em um resultado de uma operação matemática.
const numbers = [1,34,35];
//Esse método vai somar todos os valores do arrays e guardar na variável 'sum'. No 'reduce' é preciso passar os parâmetros e no final poderá incluir algum número para contribuir no cálculo.
const sum = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior+valorAtual;
},5);

console.log(sum);
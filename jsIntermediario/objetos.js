//Objeto Pessoa com quatros atributos
const pessoa = {
    name:"Guilherme",
    sobrenome: "Cardoso",
    idade:26,
    cidade:"Rio de Janeiro"
}

//Acessando as caracteristicas do objeto através do '.'
console.log(pessoa.name);

//Acessando as caracteristicas do objeto através do '[]'
console.log(pessoa['sobrenome']);

//Acessando as caracteristicas do objeto através do destruturação do objeto.
const{name,sobrenome,idade,cidade}=pessoa;
console.log(cidade);


const filmes = [
    {
        id:0,
        titulo: "Dilema das Redes",
        descricao:"documentário sobre tecgnologia",
        duracao:120
    },
    {
        id:1,
        titulo: "US",
        descricao:"Terror",
        duracao:120
    },
    {
        id:2,
        titulo: "Corrar",
        descricao:"suspence",
        duracao:120
    }
];

// Destructuring -> destruturando o array do objeto Filmes. 
const { id, titulo, descricao, duracao } = filmes;

// Usando método MAP para exibir a descrição do objeto Filmes
filmes.map(filme => console.log(filme.descricao));


//Usando o Map para dobrar o valores do array numbers
const numbers = [1,3,5,7,9];

const exibirNumbers = numbers.map(number => number*2);

console.log(exibirNumbers);


//Conversor de fahrenheit para celsius usando o MAP e o Arrow function
const fah = [0,32,45,50,75,80,120];

const converFahparaCel = fah.map( fa => Math.round((fa -32) * 5/9 ));

console.log(converFahparaCel);


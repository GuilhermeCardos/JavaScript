
//Arrays Spread e Metodos
const alunasGama = ["Paula", "Maria", "Estela","Clara"];
//Acessando uma Array através do index
//console.log(alunasGama[3]);


//Operandor Spread (...) -> Herda o array criado anteriormente'
const alunasXp = [...alunasGama, "Simara"];
//console.log(alunasXp);

for(let i = 0; i < alunasXp.length; i++)
{   
    console.log(alunasXp[i]);
}

//Métodos de interação
alunasXp.map(aluna => console.log(aluna));
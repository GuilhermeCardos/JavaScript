function calcularIdade(idade)
{
    if (idade >=18 )
    {  return 'maior de idade'  }
    else
    { return 'menor de idade'  }
}
//Forma mais compacta
function calcularIdade2(idade){
   return idade >= 18 ?'Maior de idade': 'Menor de idade';
}


//console.log(calcularIdade(17));
console.log(calcularIdade2(19));
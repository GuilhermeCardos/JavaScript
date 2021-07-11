/*for(var i =0; i<=100; i++)
{
    if(i%2 === 0)
    {  console.log(i); }

}*/



function media(n1, n2, n3){
    
    var m = (n1 + n2 + n3)/3;
    
    if(m>=7)
    {  console.log("Aprovado! Sua nota é "+m);   }
    else if((m>=5) && (m<7)) 
    {  console.log("Recuperação! Sua nota é "+m);  }
    else if (m<5)
    {  console.log("reprovado! Sua nota é "+m);   }
}

media(8,5,8);
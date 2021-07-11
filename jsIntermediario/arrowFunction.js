//function - Antiga
function sum(A,B) 
{ return A+B; }
console.log(sum(5+5));

//Arrow function
// Por ser uma função pequna não precisa cria uma bloco de código {} e nem um return.
const sum = (A,B) => A+B;
const sayHello = (name) =>`Hello ${name}.`;

console.log(sayHello('Guilherme'));
//Classe inicia-se com letras maiuscula;
class Book{
  
    constructor(title, author, pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }


    read(){
        return `Estou lendo ${this.title}`;
    }
}

//Herança.
class ITBook extends Book{

    constructor(title, author, pages, technology){
        super(title,author,pages)        ;
        this.technology=technology;
    }
    
}

class Person
{
    constructor(name, lastname, age)
    {
        this.name=name;
        this.lastname=lastname;
        this.age=age;
    }

    get name() 
    {
        return this._name;//_
    }
    set name(valueName)
    {
        this._name=valueName;
    }
        

}

/*let book = new Book('Algoritmos pra viver', 'Brian', 500);
console.log(book.read());

let otherBook = new Book('Biblia', 'Deus', 1500);
console.log(otherBook.read());*/

let itBook = new ITBook('Java','help',500,'linguem de programação');
console.log(itBook.read());


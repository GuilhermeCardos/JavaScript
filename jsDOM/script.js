        //window.document.write('Escrendo pelo js!<br>');
        //window.document.write(window.navigator.appName)
        //window.document.write(window.document.URL)
        
        /* var corpo = document.body;
        corpo.style.background = 'black'*/
        
       //Métodos de Acesso 
       /*
       var p1 = document.getElementsByTagName('p')[0];
       var p1 = document.getElementsByTagName('p')[1];
       
       //innerHTML - Segue a formatação 
        document.write( "> "+ p1.innerHTML); 
       
        p1.style.color ='blue';
       //window.alert(p1.innerText);

       //ID
       var iden = window.document.getElementById('msg');
       iden.style.background ='green';
       iden.innerText="Estou aguardando...";
       

       //NAME
       var nome = document.getElementsByName('nome')[0];
       nome.style.background ='pink';
       nome.style.color='black'
       nome.innerText='aguardando...';

       //CLASS
       var clss = document.getElementsByClassName('classe')[0];
       clss.style.background ='gray';
       clss.style.color='black'
       clss.innerText='pela classe...';

       //SELECTOR
       var d = document.querySelector('div.classe')
       d.style.background ='blue';*/

       // -----------><-------------
       let a = document.getElementById('area');
       a.addEventListener('click',clicar);
       a.addEventListener('mouseenter',entrar);
       a.addEventListener('mouseout', sair);
        function clicar(){
               a.style.backgroundColor = "orange" ;
               a.innerText = 'Laranja';
        }
        function entrar(){
                a.style.backgroundColor= 'red';
                a.innerText = 'Vermelho'
        }
        function sair(){
                a.style.backgroundColor= 'green';
                a.innerText = 'Verde'
        }

        /*-------------------------> S O M A <----------------------------*/
        let valor1 = document.getElementById('txt1');
        let valor2 = document.getElementById('txt2');

        let resultado = document.getElementById('result');
        let adicao = document.getElementById('adi');

        //Primeiro argumento a (AÇÃO), segundo argumento (FUNÇÃO)
        adicao.addEventListener('click', somar);

        function somar(){
                let n1 = Number(valor1.value); // Converção de String para Number
                let n2 = Number(valor2.value);
                
                let res = n1 + n2;            
                resultado.innerHTML = res;
        }
        //window.document.write('Escrendo pelo js!<br>');
        //window.document.write(window.navigator.appName)
        //window.document.write(window.document.URL)
        
        /* var corpo = document.body;
        corpo.style.background = 'black'*/
        
       //Métodos de Acesso 
       
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
       d.style.background ='blue';

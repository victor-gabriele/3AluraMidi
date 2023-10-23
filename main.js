function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play();}

const listaDeTeclas=document.querySelectorAll('.tecla');


    //Estrura de repetição - Enquanto
    for (let contador = 0; contador <listaDeTeclas.length;contador++){
        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_ ${instrumento}`;
        console.log (idAudio);

         tecla.onclick = function(){
         tocaSom(idAudio);
        };
        tecla.onkeydown = fuction(){
            tecla.classList.add('ativa');
        }
        tecla.onkeyup = function(){
            tecla.classlist.remove('ativa');
        }
        console.log(contador);
    }
 



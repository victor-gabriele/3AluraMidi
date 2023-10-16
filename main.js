function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play();}

const listaDeTeclas=document.querySelectorAll('.tecla');

    let contador = 0;
    //Estrura de repetição - Enquanto
    while (contador <listaDeTeclas.length){
        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_ ${instrumento}`;
        console.log(instrumento);
        listaDeTeclas[contador].onclick = function(){
            tocaSom(idAudio);
        };
        contador = contador + 1 ;
        console.log(contador);
        console.log(idAudio);
 }
 



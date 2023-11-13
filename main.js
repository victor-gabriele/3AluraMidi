//a função que deve ser executada é tocaSom, mas que som? Nesse caso, 
//será o parâmetro idElementoAudio. Ou seja,o endereço da tecla será no html e reproduzido.
function tocaSom(idElementoAudio){
    const elemento=document.querySelector(idElementoAudio);
    //se o elemento pesquisado for igual a "inexistente", o alerta de elemento não encontrado aparecerá.
    if (elemento === null) {
    alert ('elemento não encontrado');
    }
    //se o elemento existir, a função play daquele elemento acontecerá, ou 
    //seja a tecla será reproduzida.
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('elemento não encontrado');
    }
}
//querySelector encontra as informaçõesda tecla pesquisada no documento.
const listaDeTeclas=document.querySelectorAll('.tecla');
//Estrtura de repetição - Enquanto
//para que as tclas não sejam repetidas de maneira infinita, criamos o 
//for, com valor de início 0, e o valor final chamado de contador < 
//listaDeTeclas.lenght, para que a repetição seja exatamente do tamanho
//da nossa lista, que é de 9 teclas.
for(let contador = 0; contador <listaDeTeclas.length;contador++){
        const tecla=listaDeTeclas[contador];
        //classList armezena todas as informações do elemento pesquisado.
        const instrumento=tecla.classList[1];
        //o idAudio é responsável por identificar o som do pesquisado.
        const idAudio = `#som_${instrumento}`;
        console.log(instrumento);
        console.log (idAudio);
        //onclick significa "ao clicar na tecla" a função tocaSom será
        //executada, o id daquele audio será buscado e reproduzido.

         tecla.onclick = function(){
         tocaSom(idAudio);
         //okeydow significa "quando a tecla estiver pressionada", nesse caso
         //uma função será executada, e qual é essa função? É  a estilização de
         //mudança de cor do botão quando as teclas enter e space forem apertadas.
          };
 tecla.onkeydown = function(evento){
    if (evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa');
    }
};
//onkeyup significa "quando a tecla estiver erguida, não pressionada",
//nesse caso, a função será removida.
tecla.onkeyup=function(){
    tecla.classList.remove('ativa');
};
    console.log(instrumento);
console.log(contador);
}


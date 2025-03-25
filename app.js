"use strict"

const botaoTrocaImagem = document.getElementById('trocarImagem');



function trocarImagem(){
    const body = document.querySelector('body');

    const imagens = [
        'var(--imagem1)',
        'var(--imagem2)',
        'var(--imagem3)',
        'var(--imagem4)',
        'var(--imagem5)'
      ];

    let fundoAtual = 0;


    return function(){
        fundoAtual = (fundoAtual + 1) % imagens.length;
        body.style.backgroundImage = imagens[fundoAtual];    
    }
    
}

const mudarFundo = trocarImagem()

botaoTrocaImagem.addEventListener('click', mudarFundo)
document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentar = document.getElementById('aumentar-fonte');
    const botaoDiminuir = document.getElementById('diminuir-fonte');

    let tamanhoFonte = 1;

    botaoAumentar.addEventListener('click', function(){
        tamanhoFonte += 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    })
    botaoDiminuir.addEventListener('click', function(){
        tamanhoFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    })
})
let body = document.querySelector("body")
let foto = document.querySelector(".foto")
let corBotao = document.querySelector(".carrinho")

function mudarCor(fundo, imagem, cor){
    body.style.backgroundColor = fundo
    foto.src = imagem
    corBotao.style.backgroundColor = cor
}
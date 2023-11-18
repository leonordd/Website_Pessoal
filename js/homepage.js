let body = document.querySelector("body");
let img3 = document.querySelector("#img3");

//carrossel de imagens
let timer = 3000;
let imagemAtualIndex = 0;
let imagens = [ "","./data/projects/shift.png", "./data/projects/collage2.png", "./data/projects/festival2.png"];
let maximo = imagens.length-1;
let intervalId;
let allImg = document.querySelectorAll(".imgs");

img3.addEventListener("mouseenter", function(){
    //body.style.backgroundImage = "url('./data/projects/shift.png')";
    body.classList.add("show2");
    /*allImg.style.zIndex = "-10";*/
    intervalId = setInterval(proxImg(), timer);
});

img3.addEventListener("mouseleave", function(){
    body.style.backgroundImage = "";
    body.classList.remove("show2");
    clearInterval(intervalId);
});

//slide das imagens atraves de um intervalo de tempo
function proxImg() {
    //imagens[imagemAtualIndex].classList.remove("show");
    imagemAtualIndex++;
    body.style.backgroundImage = "url("+ imagens[imagemAtualIndex] +")";
    console.log(imagemAtualIndex);
    console.log(imagens[imagemAtualIndex]);

    //quando a class list termina/está no seu máximo, reinicia o ciclo das imagens
    if (imagemAtualIndex >= maximo) {
        imagemAtualIndex = 0; //voltar ao inicio
    }
}







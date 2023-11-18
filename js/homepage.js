let box = document.querySelector(".box");
let img3 = document.querySelector("#img3");

//carrossel de imagens
let timer = 1000;
let imagemAtualIndex = 0;
let imagens = [ "", "./data/projects/shift3.png", "./data/projects/shift5.png", "./data/projects/shift6.png", "./data/projects/shift2.png",];
let maximo = imagens.length-1;
let intervalId;


/*let element = document.getElementById("img3");
if (element.parentNode.matches(":hover")) {
    console.log("yes");
} else {
    console.log("no");
}*/





/*let commonParent = document.querySelector(".container");

commonParent.addEventListener("mouseover", function (event) {
  let target = event.target;

  if (target.matches("#img3") || target.matches("#otherElementId")) {
    console.log("yes");
    //html.style.backgroundImage = "url('./data/projects/shift.png')";
    html.classList.add("show");
    //allImg.style.zIndex = "-10";
    setInterval(function(){
        imagemAtualIndex=imagemAtualIndex+1;
    }, timer);
    console.log(imagemAtualIndex);
    //proxImg();
  } else {
    console.log("no");
    html.style.backgroundImage = "";
    html.classList.remove("show");
    imagemAtualIndex=0;
  }
});*/




/*let element = document.getElementById("img3");
let isHovered = false;

img3.addEventListener("mouseover", function() {
    isHovered = true;
    //console.log("yes");
});

img3.addEventListener("mouseout", function() {
    isHovered = false;
    //console.log("no");
});


function checkHoverState() {
    if (isHovered) {
        console.log("Element is currently being hovered.");
    } else {
        console.log("Element is not being hovered.");
    }
}

// Example: Check hover state after a delay
setTimeout(checkHoverState, 1000); // Check after 1 seconds*/






// Check the hover state at any point
/*if (isHovered===true) {
    console.log("true");
    html.style.backgroundImage = "url('./data/projects/shift.png')";
    html.classList.add("show");
    //allImg.style.zIndex = "-10";
    //proxImg();
} else {
    console.log("true");
   // html.style.backgroundImage = "";
    html.classList.remove("show");
}*/
let allImg = document.querySelectorAll(".container >img");
let nome = document.querySelector(".nome");
let redes = document.querySelector(".redes");
let navegacao = document.querySelector(".navegacao");

let nome_proj = document.createElement("div");
nome_proj.classList.add("nome_proj");
nome_proj.innerText = "SHIFT APPENS 2023";

img3.addEventListener("mouseover", function(){
    //body.style.backgroundImage = "url('./data/projects/shift.png')";
    box.classList.add("show");
    intervalId = setInterval(proxImg(), timer);

    box.style.zIndex="8";
    img3.style.zIndex="80";
    nome.style.zIndex="80";
    redes.style.zIndex="80";
    navegacao.style.zIndex="80";

    box.appendChild(nome_proj);
});

img3.addEventListener("mouseleave", function(){
    box.style.backgroundImage = "";
    box.classList.remove("show");
    clearInterval(intervalId);
    box.style.zIndex="-10";
    img3.style.zIndex="0";
    nome.style.zIndex="0";
    redes.style.zIndex="0";
    navegacao.style.zIndex="0";

    box.removeChild(nome_proj);
});

//slide das imagens atraves de um intervalo de tempo
function proxImg() {
    //imagens[imagemAtualIndex].classList.remove("show");
    imagemAtualIndex++;
    box.style.backgroundImage = "url("+ imagens[imagemAtualIndex] +")";
    //console.log(imagemAtualIndex);
   // console.log(imagens[imagemAtualIndex]);

    //quando a class list termina/está no seu máximo, reinicia o ciclo das imagens
    if (imagemAtualIndex >= maximo) {
        imagemAtualIndex = 0; //voltar ao inicio
    }
}







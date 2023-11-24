let imgArrays = {
  'img1': {
    images: ["../data/projects/festival2.png", "../data/projects/justica.png"],
    name: 'Typographic Composition'
  },
  'img2': {
    images: ["../data/projects/collage2.png"],
    name: 'Colagge'
  },
  'img3': {
    images: ["./data/projects/shift3.png","./data/projects/shift5.png", "./data/projects/shift7.png", "./data/projects/shift6.png", "./data/projects/shift2.png"],
    name: 'Shift APPens 2023'
  },
  'img4': {
    images: ["../data/projects/apropriation2.png", "../data/projects/apropriation3.png", "../data/projects/apropriation4.png", "../data/projects/apropriation5.png", "../data/projects/apropriation6.png", "../data/projects/apropriation7.png" ],
    name: 'Lewis Baltz Apropriation'
  },

  'img5': {
    images: ["../data/projects/gtreze2.png", "../data/projects/gtreze3.png", "../data/projects/gtreze4.png", "../data/projects/gtreze5.png", "../data/projects/gtreze6.png"],
    name: 'GTreze Website'
  },

  'img6': {
    images: ["../data/projects/cloe2.png", "../data/projects/cloe4.png", "../data/projects/cloe3.png"],
    name: 'Cloé, Invisible City'
  },
  'img7': {
    images: ["../data/projects/ccdm2.png", "../data/projects/ccdm3.png", "../data/projects/ccdm4.png", "../data/projects/ccdm5.png", "../data/projects/ccdm6.png"],
    name: 'Ciclo de Conversas, Design + Multimédia'
  },
};

  let time = 800;

  let intervalId;
  let box_change = document.querySelector('.box');
  let h1 = document.querySelector("h1");
  let navegacao = document.querySelector("nav");

  let nome_proj = document.createElement("div");
  nome_proj.classList.add("nome_proj");
  nome_proj.innerText = "SHIFT APPENS 2023"; 
  
  let img;

  function startCarousel(imgKey) {
    let imgArray = imgArrays[imgKey];
    let index = 0;

    img = document.querySelector('#' + imgKey);
    function changeImage() {
      box_change.style.backgroundImage = `url('${imgArray.images[index]}')`;
      h1.innerText=imgArray.name;
      index = (index + 1) % imgArray.images.length;
    }

    changeImage();

    // Start carousel
    intervalId = setInterval(changeImage, time);
    box_change.classList.add("show");

    box_change.style.zIndex="8";
    img.style.zIndex="80";
    navegacao.style.zIndex="80";
    h1.style.color="#FFFF00";
  }

  function stopCarousel() {
    clearInterval(intervalId);
    document.querySelector('.box').style.backgroundImage = 'none';

    box_change.classList.remove("show");

    box_change.style.zIndex="-10";
    img.style.zIndex="0";
    h1.innerText = "LEONOR DINIZ"; 
    h1.style.color="#FFFFFF";
  }





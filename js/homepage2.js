let imgArrays = {
    'img1': ["../data/projects/festival2.png"],
    'img2': ["../data/projects/apropriation2.png"],
    'img3' : ["./data/projects/shift3.png", "./data/projects/shift5.png", "./data/projects/shift6.png", "./data/projects/shift2.png"],
    'img4': ["../data/projects/collage2.png"],
    'img5': ["../data/projects/leave2.png"],
    'img6': ["../data/projects/cloe2.png"],
    'img7': ["../data/projects/ccdm2.png"],
};

  let time = 1000;

  let intervalId;
  let box_change = document.querySelector('.box');
  let h1 = document.querySelector("h1");
  let navegacao = document.querySelector("nav");

  let nome_proj = document.createElement("div");
  nome_proj.classList.add("nome_proj");
  nome_proj.innerText = "SHIFT APPENS 2023"; 
  
  let img;

  function startCarousel(imgKey) {
    let index = 0;
    let imgArray = imgArrays[imgKey];

    img = document.querySelector('#' + imgKey);

   

    function changeImage() {
      box_change.style.backgroundImage = `url('${imgArray[index]}')`;
      index = (index + 1) % imgArray.length;
    }

    // Initial call
    changeImage();

    // Start carousel
    intervalId = setInterval(changeImage, time);
    box_change.classList.add("show");
    box_change.appendChild(nome_proj);


    box_change.style.zIndex="8";
    img.style.zIndex="80";
    nome.style.zIndex="80";
    navegacao.style.zIndex="80";

    /*img.style.zIndex="30";*/
  }

  function stopCarousel() {
    clearInterval(intervalId);
    document.querySelector('.box').style.backgroundImage = 'none';
    box_change.classList.remove("show");
    box_change.removeChild(nome_proj);

    box_change.style.zIndex="-10";
    img.style.zIndex="0";
  }





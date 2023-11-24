//p5.js

let tags = document.querySelectorAll(".tags");
let d=5;
let x,y,w,h;
let c=0;
let textS = 100;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noCursor();
  background('#141414');
  mouseX =-d;
  mouseY =-d;
  x=30;
  y=30;
  w=100;
  h=100;
}

function draw() {
    stroke('#00D1FF');
    strokeWeight(d);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
  checkHover();

  if((mouseX >=0) && (mouseX <window.innerWidth) && (mouseY >0) && (mouseY<window.innerHeight)){
    background('#141414');
    for (let i = 0; i < tags.length; i++) {
        tags[i].classList.remove("hovered");
    }
  }
}

function touchMoved() {
  checkHover();
  return false;
}

function checkHover() {
  for (let i = 0; i < tags.length; i++) {
    const tagRect = tags[i].getBoundingClientRect();

    // Vê se as coordenadas de toque estão dentro da caixa delimitada por uma tag
    if (
      mouseX >= tagRect.left &&
      mouseX <= tagRect.right &&
      mouseY >= tagRect.top &&
      mouseY <= tagRect.bottom
    ) {
      tags[i].classList.add("hovered");
    }
  }
}

for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("mouseover", function () {
    tags[i].classList.add("hovered");
  });
}

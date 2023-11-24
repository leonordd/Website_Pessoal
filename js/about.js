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


function resetTags() {
  background('#141414');
  tags.forEach(tag => {
    tag.classList.remove("hovered");
  });
}

function mousePressed() {
  if (
    mouseX >= 0 &&
    mouseX < window.innerWidth &&
    mouseY > 0 &&
    mouseY < window.innerHeight
  ) {
    resetTags();
  }
}

// Add mouseover and touchstart event listeners
tags.forEach(tag => {
  tag.addEventListener("mouseover", function () {
    tag.classList.add("hovered");
  });

  tag.addEventListener("touchstart", function (event) {
    event.preventDefault();
    resetTags();
    tag.classList.add("hovered");
  });
});
/*let img3 = document.querySelector("#img3");


img3.addEventListener("mouseover", function(){

});*/
console.log("A");
/*$(function() {
    $( "#img1" ).draggable({ snap: true });
    $( "#img2" ).draggable({ snap: ".ui-widget-header", grid: [ 80, 80 ]});
    $( "#img3" ).draggable({ snap: ".ui-widget-header", grid: [ 80, 80 ] });
    $( "#img4" ).draggable({ snap: ".ui-widget-header", grid: [ 80, 80 ] });
    $( "#img5" ).draggable({ snap: ".ui-widget-header", grid: [ 80, 80 ]});
  });*/


dragElement(document.getElementById("img1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




////teste texto e rato
let d=10;

let x,y,w,h;
let c=0;

let textS = 100;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noCursor();
  background(0);
  mouseX =-d;
  mouseY =-d;
  x=30;
  y=30;
  w=100;
  h=100;
}

function draw() {

    stroke('#FFFF00');
    strokeWeight(d);
    line(mouseX, mouseY, pmouseX, pmouseY);
    if((mouseX>x) && (mouseX<x+w) && (mouseY>y) && (mouseY<=y+h) ){
        c=255;
    }

    fill(c);
    noStroke();
    rect(x,y,w,h);

    
    /*stroke(255, 50);
    fill(255);
    rect(500,500,300,20, textS);
    noStroke();
    fill(0);
    textSize(textS);
    //textFont('Avenir');
    text("jeKnowledge", 500,500,300,textS);*/

}

function mousePressed(){
  if((mouseX >=0) && (mouseX <window.innerWidth) && (mouseY >0) && (mouseY<window.innerHeight)){
    background(0);
  }
}

/*function textBox(text, posX, posY, wi, he){
// Drawing the box (not necesary just for visual reference!)
stroke(255, 50);
noFill();
rect(posX,posY, wi,he);
fill(255);
textSize(48);
//textFont("Avenir");

// When you draw text with 4 numbers you create a box that the text fits in
// x, y position of box followed by width and height of the box
text(text, posX,posY, wi,he);
}*/
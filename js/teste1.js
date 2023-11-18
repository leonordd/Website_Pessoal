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
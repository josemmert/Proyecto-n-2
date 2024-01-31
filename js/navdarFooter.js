
const pageSelected = document.querySelectorAll('.nav-item'); //capturar todas las etiquetas con clase navitem
console.log(pageSelected);
pageSelected.forEach(element => {
  element.addEventListener('mouseover', highlight);
  element.addEventListener('mouseout', removeHighlight);

});

function highlight() {
  this.querySelector('a').style.background= '#1D215E'; 
  this.querySelector('a').style.borderRadius= '30px';
}

function removeHighlight() {
  this.querySelector('a').style.background = '';
}

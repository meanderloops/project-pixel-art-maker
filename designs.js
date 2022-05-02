// Select color input
var pixelColor = document.getElementById("colorPicker");

// Select size input
var gridHeight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const pixelCanvas = document.getElementById("pixelCanvas");
const gridSubmit = document.querySelector("input[type=submit]");

gridSubmit.addEventListener('click', function makeGrid(event) {
event.preventDefault();
// Your code goes here!
console.log('grid is ' + gridHeight.value + ' x ' + gridWidth.value);

pixelCanvas.innerHTML = "";
var html = ""; 

for(var i =0; i <= (gridHeight.value - 1); i++) { 
    html += '<tr>'; 
    for(var h=0; h<= (gridWidth.value - 1); h++) { 
       html += '<td></td>'; 
    } 
    html += '</tr>'; 
}

pixelCanvas.innerHTML += html;

});
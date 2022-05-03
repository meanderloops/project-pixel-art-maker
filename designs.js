// Select color input
var pixelColor = document.getElementById("colorPicker");

// Select size input
var gridHeight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const pixelCanvas = document.getElementById("pixelCanvas");
const gridSubmit = document.querySelector("input[type=submit]");

gridSubmit.addEventListener('click', function makeGrid(event) {

    // Prevents default action of submission button (doesn't refresh page)
    event.preventDefault();

    console.log('grid is ' + gridHeight.value + ' x ' + gridWidth.value);

    // Clears table/canvas for new grid
    pixelCanvas.innerHTML = "";
    
    // Uses values from grid size to create HTML string for table element
    var html = "";
    for(var i =0; i <= (gridHeight.value - 1); i++) { 
        
        html += '<tr>'; 
        
        for(var h=0; h<= (gridWidth.value - 1); h++) { 
            // Applies bgColor attribute and onClick event for changing colors
            html += '<td bgColor="" onclick="changePixelColor(this)"></td>'; 
        
        } 
        
        html += '</tr>'; 
    
    }

    // Adds new string to canvas to create new grid
    pixelCanvas.innerHTML += html;

});

// Sets grid-cell's color upon click
function changePixelColor(pixel) {
    
    pixel.bgColor = pixelColor.value;

}
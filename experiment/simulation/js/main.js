//Your JavaScript goes in here

function moveImage() {
    // Calculate the new position (adjust these values as needed)
    var newX = 200; // X-coordinate in pixels
    var newY = 257; // Y-coordinate in pixels
var image = document.getElementById('agel');
  image.style.transform = `translate(${newX}px, ${newY}px)`;
  image.style.width= 185 + 'px';
  
}

function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var image = document.getElementById(data);
    event.target.appendChild(image);
  }
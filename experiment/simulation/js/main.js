//Your JavaScript goes in here
var image;
var image1;
function moveImage() {
    // Calculate the new position (adjust these values as needed)
    var topimg = 111 ; 
    var lefting = 98 ; 
image = document.getElementById('agel');
  image.style.top = topimg + '%';
  image.style.left = lefting + '%';  //`translate(${top}%, ${left}%)`;
  image.style.width= 65 + '%';
  
  if((top == 95) && (left = 11)){
    image1.style.display="block";
    image.style.display="none";
  }
  
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

  function moveImage1() {
    // Calculate the new position (adjust these values as needed)
    var top = 200 ; 
    var left = 310 ; 
 image1   = document.getElementById('agel1');
  image1.style.transform = `translate(${top}%, ${left}%)`;
  //image1.style.width= 69 + '%';
  image.style.display="none";
  
}
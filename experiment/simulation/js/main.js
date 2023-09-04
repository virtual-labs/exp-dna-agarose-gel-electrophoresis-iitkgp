
/*  
Lab name: Experimental Biochemistry
Exp name: DNA analysis by agarose gel electrophoresis
File name: main.js
Developer: Prakriti Dhang
*/

function start() {
  document.getElementById("gelprep").disabled = false;
  alert("A desktop or laptop is the preferred choice for an enhanced viewing experience.")
  document.getElementById("start").disabled = true;
}



var image;
var image1;
function moveImage() {
  // Calculate the new position (adjust these values as needed)
  var topimg = 223;
  var lefting = 14;
  image = document.getElementById('agel');
  image.style.top = topimg + '%';
  image.style.left = lefting + '%';  
  //image1.style.display = "block";
  //image.style.transform=`translate(${topimg}%, ${lefting}%)`;
  /* if((top == 95) && (left = 11)){
    image1.style.display="block";
    
  } */

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
  var topimg1 = 365;
  var leftimg = 18;
  image1 = document.getElementById('agel1');
  image1.style.top = topimg1 + '%';
  image1.style.left = leftimg + '%';
  //image1.style.transform = `translate(${top}%, ${left}%)`;
  //image1.style.width= 69 + '%';
  image.style.display = "none";

}



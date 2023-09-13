
/*  
Lab name: Experimental Biochemistry
Exp name: DNA analysis by agarose gel electrophoresis
File name: main.js
Developer: Prakriti Dhang
*/

function start() {
  document.getElementById("gelprep").disabled = false;
  //alert("A desktop or laptop is the preferred choice for an enhanced viewing experience. \n  When using a phone, it is recommended to enable the auto-rotate feature for an improved viewing experience.")
  document.getElementById("start").disabled = true;
  document.getElementById('myCanvasv1').style.display = "none";
  document.getElementById('myCanvast1').style.display = "none";
  document.getElementById('myCanvasvp').style.display = "none";
  document.getElementById('myCanvasvn').style.display = "none";
  document.getElementById('myCanvasrn').style.display = "none";

}


function gel_prep() {

  const checkboxesgel = document.querySelectorAll('input[type=checkbox][name=gelprep]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxesgel).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 3) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Agarose powder") && selectedValues.includes("TAE/TBE Buffer") && selectedValues.includes("Ethidium Bromide (EtBr)")) {
      alert("Correct component(s) is(are) selected.");

      document.getElementById("gelprep").disabled = true;
      document.getElementById("agel").style.display = "block";
    } else {
      alert("Incorrect component(s) is/are selected.");
    }
  }
  else {
    alert("Three components are require for preparing gel.");
  }
}


function sample_prep() {

  const checkboxessam = document.querySelectorAll('input[type=checkbox][name=sampleprep]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxessam).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 3) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("DNA") && selectedValues.includes("Dye containing bromophenol blue") && selectedValues.includes("DNA Ladder")) {
      alert("Correct component(s) is(are) selected.");
      document.getElementById("tube").style.display = "block";
      document.getElementById("sampleprep").disabled = true;
      document.getElementById("sampleload").disabled = false;
    }

    else {
      alert(" Incorrect component(s) is/are selected.");
    }
  }
  else {
    alert("Three components are require to prepare sample.");
  }




}

function sample_load() {


  //document.getElementById("tubemeter").style.display = "block";
  document.getElementById("buffer").style.display = "block";
  document.getElementById("buffertext").style.display = "none";
}



/* Sample load using peptite tube*/
const canvassdrop1 = document.getElementById('sampledrop1');
const ctxsdrop1 = canvassdrop1.getContext('2d');
const canvassdrop2 = document.getElementById('sampledrop2');
const ctxsdrop2 = canvassdrop2.getContext('2d');
const canvassdrop3 = document.getElementById('sampledrop3');
const ctxsdrop3 = canvassdrop3.getContext('2d');
const canvassdrop4 = document.getElementById('sampledrop4');
const ctxsdrop4 = canvassdrop4.getContext('2d');
const imagepp = document.getElementById('peptitea');
const imageppb = document.getElementById('peptiteb');
const imageppc = document.getElementById('peptitec');
const imageppd = document.getElementById('peptited');

let isDragging = false;

// Function to handle mouse/touch down event
function handleMouseDown(event) {
  isDragging = true;
  imagepp.style.cursor = 'pointer';
  imageppb.style.cursor = 'grabbing';
  imageppc.style.cursor = 'grabbing';
  imageppd.style.cursor = 'grabbing';

  // Calculate the offset of the mouse/touch position relative to the image
  const offsetX = event.clientX - imagepp.getBoundingClientRect().left;
  const offsetY = event.clientY - imagepp.getBoundingClientRect().top;


  // Function to handle mouse/touch move event
  function handleMouseMove(event) {
    if (isDragging) {
      // Update the position of the image based on mouse/touch position
      imagepp.style.left = event.clientX - offsetX + 'px';
      imagepp.style.top = event.clientY - offsetY + 'px';

    

      const imageRect = imagepp.getBoundingClientRect();
      const canvasRect = canvassdrop1.getBoundingClientRect();
      const canvasRect2 = canvassdrop2.getBoundingClientRect();
      const canvasRect3 = canvassdrop3.getBoundingClientRect();
      const canvasRect4 = canvassdrop4.getBoundingClientRect();

      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top &&imageRect.left <= canvasRect.left + canvasRect.width &&imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop1.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
      } 
      /* if (imageRect.left + imageRect.width >= canvasRect2.left &&imageRect.top + imageRect.height >= canvasRect2.top &&imageRect.left <= canvasRect2.left + canvasRect2.width &&imageRect.top <= canvasRect2.top + canvasRect2.height) {
        // Change the canvas color when the image touches it
        
        canvassdrop2.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
      } 
      if (imageRect.left + imageRect.width >= canvasRect3.left &&imageRect.top + imageRect.height >= canvasRect3.top &&imageRect.left <= canvasRect3.left + canvasRect3.width &&imageRect.top <= canvasRect3.top + canvasRect3.height) {
        // Change the canvas color when the image touches it
       
        canvassdrop3.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
      } 
      if (imageRect.left + imageRect.width >= canvasRect4.left &&imageRect.top + imageRect.height >= canvasRect4.top &&imageRect.left <= canvasRect4.left + canvasRect4.width &&imageRect.top <= canvasRect4.top + canvasRect4.height) {
        // Change the canvas color when the image touches it
        document.getElementById("gelrun").disabled = false;
        canvassdrop4.style.backgroundColor = '#7FA9FF';
      }  */
      
      
    
      /* else {
        document.getElementById("gelrun").disabled = true;
        // Reset the canvas color if the image is outside the canvas
       canvassdrop1.style.backgroundColor = 'white';
        canvassdrop2.style.backgroundColor = 'white';
        canvassdrop3.style.backgroundColor = 'white';
        canvassdrop4.style.backgroundColor = 'white'; 
      }  */
    }
  }

  // Function to handle mouse/touch up event
  function handleMouseUp() {
    isDragging = false;
    imagepp.style.cursor = 'pointer';
    // Remove the event listeners when dragging is complete
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    imagepp.removeEventListener('touchmove', handleMouseMove);
    imagepp.removeEventListener('touchend', handleMouseUp);
    
  }

  // Add event listeners for mouse/touch move and up events
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  imagepp.addEventListener('touchmove', handleMouseMove);
  imagepp.addEventListener('touchend', handleMouseUp);
}

// Function to change the color when clicked/touched
function changeColor() {
  imagepp.style.filter = 'hue-rotate(20deg)'; // Change color to green (90 degrees in hue rotation)
}

// Add event listeners for mouse/touch down and click/touch events
imagepp.addEventListener('mousedown', handleMouseDown);
imagepp.addEventListener('touchstart', handleMouseDown);
imagepp.addEventListener('click', changeColor);
imagepp.addEventListener('touchend', changeColor);


/** Sample 2 */

let isDraggingb = false;

// Function to handle mouse/touch down event
function handleMouseDownb(event) {
  isDraggingb = true;
  imageppb.style.cursor = 'pointer';
  

  // Calculate the offset of the mouse/touch position relative to the image
  const offsetXb = event.clientX - imageppb.getBoundingClientRect().left;
  const offsetYb = event.clientY - imageppb.getBoundingClientRect().top;


  // Function to handle mouse/touch move event
  function handleMouseMoveb(event) {
    if (isDraggingb) {
      // Update the position of the image based on mouse/touch position
      imageppb.style.left = event.clientX - offsetXb + 'px';
      imageppb.style.top = event.clientY - offsetYb + 'px';

    

      const imageRectb = imageppb.getBoundingClientRect();
     
      const canvasRect2 = canvassdrop2.getBoundingClientRect();
    

     
      if (imageRectb.left + imageRectb.width >= canvasRect2.left &&imageRectb.top + imageRectb.height >= canvasRect2.top &&imageRectb.left <= canvasRect2.left + canvasRect2.width &&imageRectb.top <= canvasRect2.top + canvasRect2.height) {
        // Change the canvas color when the image touches it
        
        canvassdrop2.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
     
      }
    
      /* else {
        document.getElementById("gelrun").disabled = true;
        // Reset the canvas color if the image is outside the canvas
       canvassdrop1.style.backgroundColor = 'white';
        canvassdrop2.style.backgroundColor = 'white';
        canvassdrop3.style.backgroundColor = 'white';
        canvassdrop4.style.backgroundColor = 'white'; 
      }  */
    }
  }

  // Function to handle mouse/touch up event
  function handleMouseUpb
  () {
    isDraggingb = false;
    imageppb.style.cursor = 'pointer';
    // Remove the event listeners when dragging is complete
    window.removeEventListener('mousemove', handleMouseMoveb);
    window.removeEventListener('mouseup', handleMouseUpb);
    imageppb.removeEventListener('touchmove', handleMouseMoveb);
    imageppb.removeEventListener('touchend', handleMouseUpb);
    
  }

  // Add event listeners for mouse/touch move and up events
  window.addEventListener('mousemove', handleMouseMoveb);
  window.addEventListener('mouseup', handleMouseUpb);
  imageppb.addEventListener('touchmove', handleMouseMoveb);
  imageppb.addEventListener('touchend', handleMouseUpb);
}

// Function to change the color when clicked/touched
function changeColorb() {
  imageppb.style.filter = 'hue-rotate(20deg)'; // Change color to green (90 degrees in hue rotation)
}

// Add event listeners for mouse/touch down and click/touch events
imageppb.addEventListener('mousedown', handleMouseDownb);
imageppb.addEventListener('touchstart', handleMouseDownb);
imageppb.addEventListener('click', changeColorb);
imageppb.addEventListener('touchend', changeColorb);
/*** Sample 2 load ends */



/** Sample 3 */

let isDraggingc = false;

// Function to handle mouse/touch down event
function handleMouseDownc(event) {
  isDraggingc = true;
  imageppc.style.cursor = 'pointer';
  

  // Calculate the offset of the mouse/touch position relative to the image
  const offsetXc = event.clientX - imageppc.getBoundingClientRect().left;
  const offsetYc = event.clientY - imageppc.getBoundingClientRect().top;


  // Function to handle mouse/touch move event
  function handleMouseMovec(event) {
    if (isDraggingc) {
      // Update the position of the image based on mouse/touch position
      imageppc.style.left = event.clientX - offsetXc + 'px';
      imageppc.style.top = event.clientY - offsetYc + 'px';

    

      const imageRectc = imageppc.getBoundingClientRect();
     
      const canvasRect3 = canvassdrop3.getBoundingClientRect();
    

     
      if (imageRectc.left + imageRectc.width >= canvasRect3.left &&imageRectc.top + imageRectc.height >= canvasRect3.top &&imageRectc.left <= canvasRect3.left + canvasRect3.width &&imageRectc.top <= canvasRect3.top + canvasRect3.height) {
        // Change the canvas color when the image touches it
        
        canvassdrop3.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
     
      }
    
      /* else {
        document.getElementById("gelrun").disabled = true;
        // Reset the canvas color if the image is outside the canvas
       canvassdrop1.style.backgroundColor = 'white';
        canvassdrop2.style.backgroundColor = 'white';
        canvassdrop3.style.backgroundColor = 'white';
        canvassdrop4.style.backgroundColor = 'white'; 
      }  */
    }
  }

  // Function to handle mouse/touch up event
  function handleMouseUpc() {
    isDraggingc = false;
    imageppc.style.cursor = 'pointer';
    // Remove the event listeners when dragging is complete
    window.removeEventListener('mousemove', handleMouseMovec);
    window.removeEventListener('mouseup', handleMouseUpc);
    imageppc.removeEventListener('touchmove', handleMouseMovec);
    imageppc.removeEventListener('touchend', handleMouseUpc);
    
  }

  // Add event listeners for mouse/touch move and up events
  window.addEventListener('mousemove', handleMouseMovec);
  window.addEventListener('mouseup', handleMouseUpc);
  imageppc.addEventListener('touchmove', handleMouseMovec);
  imageppc.addEventListener('touchend', handleMouseUpc);
}

// Function to change the color when clicked/touched
function changeColorc() {
  imageppc.style.filter = 'hue-rotate(20deg)'; // Change color to green (90 degrees in hue rotation)
}

// Add event listeners for mouse/touch down and click/touch events
imageppc.addEventListener('mousedown', handleMouseDownc);
imageppc.addEventListener('touchstart', handleMouseDownc);
imageppc.addEventListener('click', changeColorc);
imageppc.addEventListener('touchend', changeColorc);
/*** Sample 3 load ends */

/** Sample 4 */

let isDraggingd = false;

// Function to handle mouse/touch down event
function handleMouseDownd(event) {
  isDraggingd = true;
  imageppd.style.cursor = 'pointer';
  

  // Calculate the offset of the mouse/touch position relative to the image
  const offsetXd = event.clientX - imageppd.getBoundingClientRect().left;
  const offsetYd = event.clientY - imageppd.getBoundingClientRect().top;


  // Function to handle mouse/touch move event
  function handleMouseMoved(event) {
    if (isDraggingd) {
      // Update the position of the image based on mouse/touch position
      imageppd.style.left = event.clientX - offsetXd + 'px';
      imageppd.style.top = event.clientY - offsetYd + 'px';

    

      const imageRectd = imageppd.getBoundingClientRect();
     
      const canvasRect4 = canvassdrop4.getBoundingClientRect();
    

     
      if (imageRectd.left + imageRectd.width >= canvasRect4.left && imageRectd.top + imageRectd.height >= canvasRect4.top &&imageRectd.left <= canvasRect4.left + canvasRect4.width &&imageRectd.top <= canvasRect4.top + canvasRect4.height) {
        // Change the canvas color when the image touches it
        
        canvassdrop4.style.backgroundColor = '#7FA9FF';
        document.getElementById("gelrun").disabled = false;
     
      }
    
      /* else {
        document.getElementById("gelrun").disabled = true;
        // Reset the canvas color if the image is outside the canvas
       canvassdrop1.style.backgroundColor = 'white';
        canvassdrop2.style.backgroundColor = 'white';
        canvassdrop3.style.backgroundColor = 'white';
        canvassdrop4.style.backgroundColor = 'white'; 
      }  */
    }
  }

  // Function to handle mouse/touch up event
  function handleMouseUpd() {
    isDraggingd = false;
    imageppd.style.cursor = 'pointer';
    // Remove the event listeners when dragging is complete
    window.removeEventListener('mousemove', handleMouseMoved);
    window.removeEventListener('mouseup', handleMouseUpd);
    imageppd.removeEventListener('touchmove', handleMouseMoved);
    imageppd.removeEventListener('touchend', handleMouseUpd);
    
  }

  // Add event listeners for mouse/touch move and up events
  window.addEventListener('mousemove', handleMouseMoved);
  window.addEventListener('mouseup', handleMouseUpd);
  imageppd.addEventListener('touchmove', handleMouseMoved);
  imageppd.addEventListener('touchend', handleMouseUpd);
}

// Function to change the color when clicked/touched
function changeColord() {
  imageppd.style.filter = 'hue-rotate(20deg)'; // Change color to green (90 degrees in hue rotation)
}

// Add event listeners for mouse/touch down and click/touch events
imageppd.addEventListener('mousedown', handleMouseDownd);
imageppd.addEventListener('touchstart', handleMouseDownd);
imageppd.addEventListener('click', changeColord);
imageppd.addEventListener('touchend', changeColord);
/*** Sample 4 load ends */

/** Move gel to electrophoresis chamber */
var image;
var imageag;
var ctxgs1, ctxgs2,ctxgs3,ctxgs4;
var canvass1, canvass2,canvass3,canvass4;
var canvaside1, canvasside2,canvasside3, canvasside4;
var ctxs1,ctxs2,ctxs3,ctxs4;
function moveImage() {
  // Calculate the new position (adjust these values as needed)
  var topimg = 223;
  var lefting = 17;
  image = document.getElementById('agel');
  image.style.top = topimg + '%';
  image.style.left = lefting + '%';
  document.getElementById('agel1').style.display = "block";
  document.getElementById('agel').style.display = "none";
  document.getElementById("sampleprep").disabled = false;
  //imageag.style.display="block";
  //image1.style.display = "block";
  //image.style.transform=`translate(${topimg}%, ${lefting}%)`;
  /* if((top == 95) && (left = 11)){
    
    
  } */
  document.getElementById('sampledrop1').style.display = "block";
  document.getElementById('sampledrop2').style.display = "block";
  document.getElementById('sampledrop3').style.display = "block";
  document.getElementById('sampledrop4').style.display = "block";
}

/* function allowDrop(event) {
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
} */

function moveImage1() {
  // Calculate the new position (adjust these values as needed)
  var topimg1 = 365;
  var leftimg = 18;
  imageag = document.getElementById('agel1');
  imageag.style.top = topimg1 + '%';
  imageag.style.left = leftimg + '%';
  //image1.style.transform = `translate(${top}%, ${left}%)`;
  //image1.style.width= 69 + '%';
  document.getElementById('agel').style.display = "none";
  document.getElementById('sample1').style.display = "none";
  document.getElementById('sample2').style.display = "none";
  document.getElementById('sample3').style.display = "none";
  document.getElementById('sample4').style.display = "none";
  document.getElementById('sampledrop1').style.display = "none";
  document.getElementById('sampledrop2').style.display = "none";
  document.getElementById('sampledrop3').style.display = "none";
  document.getElementById('sampledrop4').style.display = "none";

 /*  ctxgs1.clearRect(0, 0, canvass1.width, canvass1.height);
  ctxgs2.clearRect(0, 0, canvass2.width, canvass2.height);
  ctxgs3.clearRect(0, 0, canvass3.width, canvass3.height);
  ctxgs4.clearRect(0, 0, canvass4.width, canvass4.height); */

}

/**************************************************** Loads buffer in the electophoresis chamber **********************************************************************************/


function addbuffer() {
  document.getElementById("gelrun").disabled = false;
  /**side 1 */
  canvaside1 = document.getElementById("myCanvass1");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 135;
  var speed = 1;

  function drawLine() {

    ctxs1.strokeStyle = '#E0FCFF  ';
    ctxs1.globalAlpha = 0.02;
    ctxs1.lineWidth = 600;
    ctxs1.beginPath();
    ctxs1.moveTo(0, posY); /*  0-130*/
    ctxs1.lineTo(0, 180);
    ctxs1.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY < 0 || posY > canvaside1.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);


  /**side 2 */
  canvasside2 = document.getElementById("myCanvass2");
  ctxs2 = canvasside2.getContext("2d");
  var posYs2 = 135;
  var speeds2 = 1;

  function drawLines2() {

    ctxs2.strokeStyle = '#E0FCFF ';
    ctxs2.globalAlpha = 0.02;
    ctxs2.lineWidth = 600;
    ctxs2.beginPath();
    ctxs2.moveTo(0, posYs2); /*  0-130*/
    ctxs2.lineTo(0, 180);
    ctxs2.stroke();
  }

  function moveLines2() {
    posYs2 += speeds2;

    if (posYs2 < 0 || posYs2 > canvasside2.height) {
      speeds2 = speeds2 * -1;
    }
  }

  function loops2() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLines2();
    drawLines2();
    cancelani = requestAnimationFrame(loops2);
  }
  requestAnimationFrame(loops2);




  /**side 3 */
  canvasside3 = document.getElementById("myCanvass3");
  ctxs3 = canvasside3.getContext("2d");
  var posYs3 = 135;
  var speeds3 = 1;

  function drawLines3() {

    ctxs3.strokeStyle = '#E0FCFF ';
    ctxs3.globalAlpha = 0.02;
    ctxs3.lineWidth = 600;
    ctxs3.beginPath();
    ctxs3.moveTo(0, posYs3); /*  0-130*/
    ctxs3.lineTo(0, 180);
    ctxs3.stroke();
  }

  function moveLines3() {
    posYs3 += speeds3;

    if (posYs3 < 0 || posYs3 > canvasside3.height) {
      speeds3 = speeds3 * -1;
    }
  }

  function loops3() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLines3();
    drawLines3();
    cancelani = requestAnimationFrame(loops3);
  }
  requestAnimationFrame(loops3);

  /**side 4 */
  canvasside4 = document.getElementById("myCanvass4");
  ctxs4 = canvasside4.getContext("2d");
  var posYs4 = 135;
  var speeds4 = 1;

  function drawLines4() {

    ctxs4.strokeStyle = '#E0FCFF ' //'#D0F7FF';
    ctxs4.globalAlpha = 0.02;
    ctxs4.lineWidth = 600;
    ctxs4.beginPath();
    ctxs4.moveTo(0, posYs4); /*  0-130*/
    ctxs4.lineTo(0, 180);
    ctxs4.stroke();
  }

  function moveLines4() {
    posYs4 += speeds4;

    if (posYs4 < 0 || posYs4 > canvasside4.height) {
      speeds4 = speeds4 * -1;
    }
  }

  function loops4() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLines4();
    drawLines4();
    cancelani = requestAnimationFrame(loops4);
  }
  requestAnimationFrame(loops4);

  //document.getElementById("sampleload").disabled = true;
  
}

/******************************************************* Load Sample  *****************************************************************/
function sample_loadA(){
  document.getElementById("peptitea").style.display="block";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
}

function sample_loadB(){
  document.getElementById("peptiteb").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
}

function sample_loadC(){
  document.getElementById("peptitec").style.display="block";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptited").style.display="none";
}

function sample_loadD(){
  document.getElementById("peptited").style.display="block";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptitea").style.display="none";
}

function voltclick() {

  const canvas = document.getElementById('textvoltimer');
  var volt = 0;
  // Check if the browser supports the canvas element

  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

  // Define the text to be displayed
  const text = volt;

  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);

}

/**************************************************** Increase voltage value **********************************************************************************/

var volt = 10;
function voltinc() {

  const canvas = document.getElementById('textvoltimer');


  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);

  volt = volt + 10;
}


/**************************************************** Decrease voltage value **********************************************************************************/


function voltdec() {

  const canvas = document.getElementById('textvoltimer');


  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
  volt = volt - 10;
  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);


}



/**************************************************** On click running of gel button voltmer buttons get activated **********************************************************************************/

function run_gel() {
  document.getElementById('myCanvasv1').style.display = "block";
  document.getElementById('myCanvast1').style.display = "block";
  document.getElementById('myCanvasvp').style.display = "block";
  document.getElementById('myCanvasvn').style.display = "block";
  document.getElementById('myCanvasrn').style.display = "block";
  document.getElementById("sampleload").disabled = true;
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("gelrun").disabled = true;


}


/**************************************************** Ruuning sample in gel  **********************************************************************************/


function runninggel() {
  document.getElementById("viewsample").disabled = false;

  const canvas = document.getElementById('textvoltimer');


  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
  volt = volt - 10;
  // Define the text to be displayed
  const text = volt;


  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);

  if (text == null) {
    alert("Give input  between 50V and 100 V.")
  }
  else {
    gelrun();
  }


}




function gelrun() {
  canvass1 = document.getElementById("sample1");
  ctxgs1 = canvass1.getContext("2d");
  var posX = 5;
  var speed = 0.2;



  function drawLine() {
    const gradient = ctxgs1.createLinearGradient(0, 0, canvass1.width, 0);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)

    // Set the stroke style to the gradient
    ctxgs1.strokeStyle = gradient;

   // ctxgs1.strokeStyle = '#7FA9FF';
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs1.lineWidth = 300;
    ctxgs1.beginPath();
    ctxgs1.moveTo(posX, 0); /*  */
    ctxgs1.lineTo(0, 0);
    ctxgs1.stroke();
  }

  function moveLine() {
    posX += speed;

    if (posX < 0 || posX > canvass1.width) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);



  /*sample 2 */

  canvass2 = document.getElementById("sample2");
  ctxgs2 = canvass2.getContext("2d");
  var posX2 = 5;
  var speed2 = 0.2;



  function drawLine2() {
    const gradient = ctxgs2.createLinearGradient(0, 0, canvass2.width, 0);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)


    ctxgs2.strokeStyle = gradient;
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs2.lineWidth = 300;
    ctxgs2.beginPath();
    ctxgs2.moveTo(posX2, 0); /*  */
    ctxgs2.lineTo(0, 0);
    ctxgs2.stroke();
  }

  function moveLine2() {
    posX2 += speed2;

    if (posX2 < 0 || posX2 > canvass2.width) {
      speed2 = speed2 * -1;
    }
  }

  function loop2() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine2();
    drawLine2();
    cancelani = requestAnimationFrame(loop2);
  }
  requestAnimationFrame(loop2);


  /** sample 3 */

  canvass3 = document.getElementById("sample3");
  ctxgs3 = canvass3.getContext("2d");
  var posX3 = 5;
  var speed3 = 0.2;



  function drawLine3() {
    const gradient = ctxgs3.createLinearGradient(0, 0, canvass3.width, 0);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)


    ctxgs3.strokeStyle = gradient;
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs3.lineWidth = 300;
    ctxgs3.beginPath();
    ctxgs3.moveTo(posX3, 0); /*  0-180*/
    ctxgs3.lineTo(0, 0);
    ctxgs3.stroke();
  }

  function moveLine3() {
    posX3 += speed3;

    if (posX3 < 0 || posX3 > canvass3.width) {
      speed3 = speed3 * -1;
    }
  }

  function loop3() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine3();
    drawLine3();
    cancelani = requestAnimationFrame(loop3);
  }
  requestAnimationFrame(loop3);

  /** Sample 4 */

  canvass4 = document.getElementById("sample4");
  ctxgs4 = canvass4.getContext("2d");
  var posX4 = 5;
  var speed4 = 0.2;



  function drawLine4() {
    const gradient = ctxgs4.createLinearGradient(0, 0, canvass4.width, 0);

    // Add color stops to the gradient
    gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
    gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
    gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)


    ctxgs4.strokeStyle = gradient;
    //ctxs1.fillStyle = gr;
    //ctxs1.fillRect(10,10,150,80);
    ctxgs4.lineWidth = 300;
    ctxgs4.beginPath();
    ctxgs4.moveTo(posX, 0); /*  0-180*/
    ctxgs4.lineTo(0, 0);
    ctxgs4.stroke();
  }

  function moveLine4() {
    posX4 += speed4;

    if (posX4 < 0 || posX4 > canvass4.width) {
      speed4 = speed4 * -1;
    }
  }

  function loop4() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine4();
    drawLine4();
    cancelani = requestAnimationFrame(loop4);
  }
  requestAnimationFrame(loop4);
  document.getElementById("viewsample").disabled = false;
}

/**************************************************** View under UV light **********************************************************************************/

var canvasuv1, canvasuv2;
var ctxuv1, ctxuv2;
function view_sample_UVlight() {
  document.getElementById("sampleload").disabled = true;
  document.getElementById("gelrun").disabled = true;
  document.getElementById("myCanvasrn").style.display="none";
  document.getElementById("viewsample").disabled = true;
  document.getElementById("output").style.display="block";
  document.getElementById("agel1").style.display="none";
  canvasuv1 = document.getElementById("myCanvasuv1");
  ctxuv1 = canvasuv1.getContext("2d");
  const gradient = ctxuv1.createLinearGradient(0, 0, canvasuv1.width, 0);

  // Add color stops to the gradient
  gradient.addColorStop(0, 'white');     // Start color (position 0)
  gradient.addColorStop(0.8, '#F6FFBE');  // Middle color (position 0.5)
  gradient.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv1.strokeStyle = gradient;
  

    ctxuv1.lineWidth = 300;
    ctxuv1.beginPath();
    ctxuv1.moveTo(120, 0); /*  0-180*/
    ctxuv1.lineTo(0, 0);
    ctxuv1.stroke();


    canvasuv2 = document.getElementById("myCanvasuv2");
  ctxuv2 = canvasuv2.getContext("2d");
  const gradient2 = ctxuv1.createLinearGradient(0, 0, canvasuv2.width, 0);

  // Add color stops to the gradient
  gradient2.addColorStop(0, 'white');     // Start color (position 0)
  gradient2.addColorStop(0.8, '#F6FFBE ');  // Middle color (position 0.5)
  gradient2.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv2.strokeStyle = gradient2;

 
    ctxuv2.lineWidth = 300;
    ctxuv2.beginPath();
    ctxuv2.moveTo(120, 0); /*  0-180*/
    ctxuv2.lineTo(0, 0);
    ctxuv2.stroke();
}

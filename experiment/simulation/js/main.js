
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
  document.getElementById('myCanvasv1').style.display="none";
  				document.getElementById('myCanvast1').style.display="none";
 				document.getElementById('myCanvasvp').style.display="none";
                 document.getElementById('myCanvasvn').style.display="none";

}


function gel_prep() {
  document.getElementById("gelprep").disabled = true;
  
}

function sample_prep() {
 
  document.getElementById("sampleprep").disabled = true;
  document.getElementById("tube").style.display = "block";
  document.getElementById("tubemeter").style.display = "block";
  document.getElementById("buffer").style.display = "block";
}

function sample_run() {
 
  document.getElementById("viewsample").disabled = false;
}
function view_sample_UVlight() {
  document.getElementById("viewsample").disabled = true;
 
}


var image;
var imageag;
function moveImage() {
  // Calculate the new position (adjust these values as needed)
  var topimg = 223;
  var lefting = 17;
  image = document.getElementById('agel');
  image.style.top = topimg + '%';
  image.style.left = lefting + '%'; 
  document.getElementById('agel1').style.display="block"; 
  document.getElementById('agel').style.display="none"; 
  document.getElementById("sampleprep").disabled = false;
  //imageag.style.display="block";
  //image1.style.display = "block";
  //image.style.transform=`translate(${topimg}%, ${lefting}%)`;
  /* if((top == 95) && (left = 11)){
    
    
  } */

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

}


function addbuffer(){
/**side 1 */
  canvaside1 = document.getElementById("myCanvass1");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 135 ;
  var speed=1;

  function drawLine(){
  
  ctxs1.strokeStyle = '#D0F7FF';
  ctxs1.globalAlpha = 0.02;
  ctxs1.lineWidth = 600;
  ctxs1.beginPath();
  ctxs1.moveTo(0, posY); /*  0-130*/
  ctxs1.lineTo(0, 180);
  ctxs1.stroke();
}

function moveLine () {
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
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);


/**side 2 */
canvasside2 = document.getElementById("myCanvass2");
  ctxs2 = canvasside2.getContext("2d");
  var posYs2 = 135 ;
  var speeds2=1;

  function drawLines2(){
  
  ctxs2.strokeStyle = '#D0F7FF';
  ctxs2.globalAlpha = 0.02;
  ctxs2.lineWidth = 600;
  ctxs2.beginPath();
  ctxs2.moveTo(0, posYs2); /*  0-130*/
  ctxs2.lineTo(0, 180);
  ctxs2.stroke();
}

function moveLines2 () {
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
cancelani=  requestAnimationFrame(loops2);
}
requestAnimationFrame(loops2);




/**side 3 */
canvasside3 = document.getElementById("myCanvass3");
  ctxs3 = canvasside3.getContext("2d");
  var posYs3 = 135 ;
  var speeds3=1;

  function drawLines3(){
  
  ctxs3.strokeStyle = '#D0F7FF';
  ctxs3.globalAlpha = 0.02;
  ctxs3.lineWidth = 600;
  ctxs3.beginPath();
  ctxs3.moveTo(0, posYs3); /*  0-130*/
  ctxs3.lineTo(0, 180);
  ctxs3.stroke();
}

function moveLines3 () {
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
cancelani=  requestAnimationFrame(loops3);
}
requestAnimationFrame(loops3);

/**side 4 */
canvasside4 = document.getElementById("myCanvass4");
  ctxs4 = canvasside4.getContext("2d");
  var posYs4 = 135 ;
  var speeds4=1;

  function drawLines4(){
  
  ctxs4.strokeStyle = '#D0F7FF';
  ctxs4.globalAlpha = 0.02;
  ctxs4.lineWidth = 600;
  ctxs4.beginPath();
  ctxs4.moveTo(0, posYs4); /*  0-130*/
  ctxs4.lineTo(0, 180);
  ctxs4.stroke();
}

function moveLines4 () {
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
cancelani=  requestAnimationFrame(loops4);
}
requestAnimationFrame(loops4);

document.getElementById("samplerun").disabled = false;

}

function sample_run(){
  canvass1 = document.getElementById("sample1");
  ctxs1 = canvass1.getContext("2d");
  var posX = 5 ;
  var speed=0.2;
 
  
 
  function drawLine(){
    //const gr = ctxs1.createLinearGradient(0, 0, 350, 0);
          
    // Set color and position in a gradient object
   
  ctxs1.strokeStyle = '#7FA9FF';
  //ctxs1.fillStyle = gr;
  //ctxs1.fillRect(10,10,150,80);
  ctxs1.lineWidth = 300;
  ctxs1.beginPath();
  ctxs1.moveTo(posX, 0); /*  0-180*/
  ctxs1.lineTo(0, 0);
  ctxs1.stroke();
}

function moveLine () {
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
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);



/*sample 2 */

canvass2 = document.getElementById("sample2");
  ctxs2 = canvass2.getContext("2d");
  var posX2 = 5 ;
  var speed2=0.2;
 
  
 
  function drawLine2(){
    //const gr = ctxs1.createLinearGradient(0, 0, 350, 0);
          
    // Set color and position in a gradient object
   
  ctxs2.strokeStyle = '#7FA9FF';
  //ctxs1.fillStyle = gr;
  //ctxs1.fillRect(10,10,150,80);
  ctxs2.lineWidth = 300;
  ctxs2.beginPath();
  ctxs2.moveTo(posX2, 0); /*  0-180*/
  ctxs2.lineTo(0, 0);
  ctxs2.stroke();
}

function moveLine2 () {
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
cancelani=  requestAnimationFrame(loop2);
}
requestAnimationFrame(loop2);


/** sample 3 */

canvass3 = document.getElementById("sample3");
  ctxs3 = canvass3.getContext("2d");
  var posX3 = 5 ;
  var speed3=0.2;
 
  
 
  function drawLine3(){
    //const gr = ctxs1.createLinearGradient(0, 0, 350, 0);
          
    // Set color and position in a gradient object
   
  ctxs3.strokeStyle = '#7FA9FF';
  //ctxs1.fillStyle = gr;
  //ctxs1.fillRect(10,10,150,80);
  ctxs3.lineWidth = 300;
  ctxs3.beginPath();
  ctxs3.moveTo(posX3, 0); /*  0-180*/
  ctxs3.lineTo(0, 0);
  ctxs3.stroke();
}

function moveLine3 () {
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
cancelani=  requestAnimationFrame(loop3);
}
requestAnimationFrame(loop3);

/** Sample 4 */

canvass4 = document.getElementById("sample4");
  ctxs4 = canvass4.getContext("2d");
  var posX4 = 5 ;
  var speed4=0.2;
 
  
 
  function drawLine4(){
    //const gr = ctxs1.createLinearGradient(0, 0, 350, 0);
          
    // Set color and position in a gradient object
   
  ctxs4.strokeStyle = '#7FA9FF';
  //ctxs1.fillStyle = gr;
  //ctxs1.fillRect(10,10,150,80);
  ctxs4.lineWidth = 300;
  ctxs4.beginPath();
  ctxs4.moveTo(posX, 0); /*  0-180*/
  ctxs4.lineTo(0, 0);
  ctxs4.stroke();
}

function moveLine4 () {
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
cancelani=  requestAnimationFrame(loop4);
}
requestAnimationFrame(loop4);

}

function voltclick(){

  const canvas = document.getElementById('textvoltimer');
 var volt= 0;
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
var volt= 10;
function voltinc(){
 
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

    volt= volt+10;
}

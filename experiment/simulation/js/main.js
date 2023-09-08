
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
  
  ctxs1.strokeStyle = '#F0E8E6';
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
  
  ctxs2.strokeStyle = '#F0E8E6';
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
  
  ctxs3.strokeStyle = '#F0E8E6';
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
  
  ctxs4.strokeStyle = '#F0E8E6';
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
  var posY = 135 ;
  var speed=1;

  function drawLine(){
  
  ctxs1.strokeStyle = 'blue';
  
  ctxs1.lineWidth = 600;
  ctxs1.beginPath();
  ctxs1.moveTo(0, posY); /*  0-130*/
  ctxs1.lineTo(0, 180);
  ctxs1.stroke();
}

function moveLine () {
posY += speed;

if (posY < 0 || posY > canvass1.height) {
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

}

/**  gradient color 
 *  var gr = context.createLinearGradient(0, 0, 350, 200);
          
        // Set color and position in a gradient object
        gr.addColorStop("0", "green");
        gr.addColorStop("0.7", "yellow");
        gr.addColorStop("1.0", "blue");
 */

/*  
Lab name: Experimental Biochemistry
Exp name: DNA analysis by agarose gel electrophoresis
File name: main.js
Developer: Prakriti Dhang
*/

function start() {

  document.getElementById("heatmix").disabled = false;
  //alert("A desktop or laptop is the preferred choice for an enhanced viewing experience. \n  When using a phone, it is recommended to enable the auto-rotate feature for an improved viewing experience.")
  document.getElementById("start").disabled = true;
  document.getElementById('myCanvasv1').style.display = "none";
  document.getElementById('myCanvast1').style.display = "none";
  document.getElementById('myCanvasvp').style.display = "none";
  document.getElementById('myCanvasvn').style.display = "none";
  document.getElementById('myCanvasrn').style.display = "none";
  document.getElementById('agel1').removeAttribute("onclick");
  document.getElementById("g1").disabled = false;
  document.getElementById("g2").disabled = false;
  document.getElementById("g3").disabled = false;
  document.getElementById("g4").disabled = false;
  document.getElementById("g5").disabled = false;
  document.getElementById("g6").disabled = false;

  document.getElementById('loadsamplea').style.pointerEvents = "none";
  document.getElementById('loadsampleb').style.pointerEvents = "none";
  document.getElementById('loadsamplec').style.pointerEvents = "none";
  document.getElementById('loadsampled').style.pointerEvents = "none";
}

function restartexp() {
  location.reload()
}

function heatmix() {

  const checkboxesgel = document.querySelectorAll('input[type=checkbox][name=gelprep]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxesgel).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 2) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("Agarose powder") && selectedValues.includes("TAE/TBE Buffer")) {
      // alert("Correct component(s) is(are) selected.");
      $('#heatalertmessage').modal('show');
      $('.modal-body').text('Correct component(s) is(are) selected.');

      // document.getElementById("placecomb").disabled = false;

    } else {
      //alert("Incorrect component(s) is/are selected.\n The correct components are Agarose powder, TAE/TBE Buffer, and Ethidium Bromide (EtBr)");
      $('#voltalertmessage').modal('show');
      $('.modal-body').text('Incorrect component(s) is/are selected.\n The correct components are Agarose powder, and TAE/TBE Buffer.');
    }
  }
  else {
    //alert("Three components are require for preparing gel.");
    $('#voltalertmessage').modal('show');
    $('.modal-body').text('Two components are require for preparing gel mixture.');
  }
}

function heataltmsg() {
  document.getElementById("heatalertmessage").style.display = "none";
  document.getElementById("heatalertmessage").classList.remove("show");
  window.scrollBy(0, 600);
  document.getElementById("gelprep").disabled = true;
  document.getElementById("microwave").style.display = "block";
  document.getElementById("emptymicrowave").style.display = "none";
  //document.getElementById("agel").style.display = "block";
  document.getElementById("heatmix").disabled = true;
  cancelmicro = setInterval(changemicrowaveliq, 2500);
}

function changemicrowaveliq() {
  document.getElementById("microwave").style.display = "none";
  document.getElementById("microwaveliq").style.display = "block";
  document.getElementById("microwaveliq").setAttribute("onclick", "mgelliq()");
  $('#voltalertmessage').modal('show');
  $('.modal-body').text('Mixture has been melted. Click on the microwave image.');
  clearInterval(cancelmicro);

}

function mgelliq() {
  document.getElementById("microwave").style.display = "none";
  document.getElementById("microwaveliq").style.display = "none";
  document.getElementById("emptymicrowave").style.display = "block";
  document.getElementById("gel_liq").style.display = "block";
  cancelliqcool = setInterval(liqcool, 3000);

  


}

function liqcool(){
  $('#voltalertmessage').modal('show');
  $('.modal-body').text('Mixture has been cooled. Click on "Add Ethidium Bromide (EtBr)" checkbox.');
  clearInterval(cancelliqcool);
}

function addetbr() {
  document.getElementById("gel_liqetbr").style.display = "block";
  document.getElementById("gel_liq").style.display = "none";
  document.getElementById("gelprep").disabled = false;
  window.scrollBy(0, 600);
}

function gel_prep() {

  //const checkboxesgel = document.querySelectorAll('input[type=checkbox][name=gelprep1]:checked'); //.form-check-input
  //const selectedCheckboxes = Array.from(checkboxesgel).filter(checkbox => checkbox.checked);

  // if (selectedCheckboxes.length === 1) {
  //  const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

  // // Check if the selected values are correct
  // if (selectedValues.includes("Ethidium Bromide (EtBr)") ) {
  // alert("Correct component(s) is(are) selected.");
  //   $('#voltalertmessage').modal('show');
  //   $('.modal-body').text('Correct component(s) is(are) selected.');
  document.getElementById("gel_liqetbr").setAttribute("onclick", "gelliqetbr()");
  document.getElementById("gelprep").disabled = true;
  // document.getElementById("placecomb").disabled = false;

  //} else {
  //alert("Incorrect component(s) is/are selected.\n The correct components are Agarose powder, TAE/TBE Buffer, and Ethidium Bromide (EtBr)");
  //   $('#voltalertmessage').modal('show');
  //   $('.modal-body').text('Incorrect component is selected.\n The correct component is  Ethidium Bromide (EtBr).');
  // }
  //}
  // else {
  //alert("Three components are require for preparing gel.");
  //  $('#voltalertmessage').modal('show');
  //  $('.modal-body').text('One component is require for preparing gel.');
  //}
}

function gelliqetbr() {
  document.getElementById("gelprep").disabled = true;
  document.getElementById("agel").style.display = "block";
  document.getElementById("emptyflask").style.display = "none";
  document.getElementById("gel_liq").style.display = "none";
  document.getElementById("gel_liqetbr").style.display = "block";
  document.getElementById("removecomb").disabled = true;
  document.getElementById("gel_liqetbr").style.left = 15 + "%";
  document.getElementById("gel_liqetbr").style.transform = "rotate(-60deg)";
  cancelgeltrat = setInterval(gelpourtray, 1000);

}

function gelpourtray() {
  document.getElementById("emptyflask").style.display = "block";
  document.getElementById("gel_liq").style.display = "none";
  document.getElementById("gel_liqetbr").style.display = "none";
  document.getElementById("removecomb").disabled = false;
  clearInterval(cancelgeltrat);
}

/*function place_comb(){
  document.getElementById("comb").style.display = "block";
  document.getElementById("placecomb").disabled = true;
  document.getElementById("removecomb").disabled = false;
  window.scrollBy(0,500);
}*/

function remove_comb() {
  document.getElementById("comb").style.display = "none";
  document.getElementById("removecomb").disabled = true;
  document.getElementById("wells").style.display = "block";
  document.getElementById("agel").setAttribute("onclick", "moveImage()");
  window.scrollBy(0, 500);
}

function sample_prep() {

  const checkboxessam = document.querySelectorAll('input[type=checkbox][name=sampleprep]:checked'); //.form-check-input
  const selectedCheckboxes = Array.from(checkboxessam).filter(checkbox => checkbox.checked);

  if (selectedCheckboxes.length === 2) {
    const selectedValues = selectedCheckboxes.map(checkbox => checkbox.value);

    // Check if the selected values are correct
    if (selectedValues.includes("DNA") && selectedValues.includes("Dye containing bromophenol blue")) {
      $('#voltalertmessage').modal('show');
      $('.modal-body').text('Correct component(s) is(are) selected.');
      document.getElementById("tubea").style.display = "block";
      document.getElementById("tubeb").style.display = "block";
      document.getElementById("tubec").style.display = "block";
      document.getElementById("tubed").style.display = "block";
      document.getElementById("sampleprep").disabled = true;
      document.getElementById("bufferload").disabled = false;
      document.getElementById('loadsamplea').style.pointerEvents = "auto";
      window.scrollBy(0, 600);
    }

    else {
      //alert(" Incorrect component(s) is/are selected. \n The correct components are DNA and DNA Dye containing bromophenol blue.");
      $('#voltalertmessage').modal('show');
      $('.modal-body').text('Incorrect component(s) is/are selected. \n The correct components are DNA and DNA Dye containing bromophenol blue.');
    }
  }
  else {
    $('#voltalertmessage').modal('show');
    $('.modal-body').text('DNA and Dye containing bromophenol blue  are the require component to prepare sample.');
    // alert("DNA and Dye containing bromophenol blue  are the require component to prepare sample.");
  }




}

function buffer_load() {


  //document.getElementById("tubemeter").style.display = "block";
  document.getElementById("buffer").style.display = "block";
  window.scrollBy(0, 300);

  //document.getElementById("buffertext").style.display = "none";
}

function sample_loadA() {
  document.getElementById("peptitea").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptiteb1").style.display = "none";
  document.getElementById("peptitec1").style.display = "none";
  document.getElementById("peptited1").style.display = "none";
  document.getElementById('loadsampleb').style.pointerEvents = "auto";
  document.getElementById("tubeao").style.display = "block";
  document.getElementById("tubea").style.display = "none";
  /* Sample load using peptite tube*/
  const canvassdrop1 = document.getElementById('sampledrop1');
  const ctxsdrop1 = canvassdrop1.getContext('2d');

  const imagepp = document.getElementById('peptitea');



  let isDragging = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {

    isDragging = true;
    imagepp.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

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
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */
        

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          //  clearInterval(clearmpcnge);
          canvassdrop1.style.backgroundColor = '#7FA9FF';
          
          /*  clearmp1a = setInterval(changempc, 200);
 
 
           function changempc() {
             document.getElementById("peptitea").style.display = "none";
             document.getElementById("peptitea1").style.display = "block";
             document.getElementById("peptitea1").style.top = 205 + '%';
             document.getElementById("peptitea1").style.left = 14.7 + '%';
             canvassdrop1.style.backgroundColor = '#7FA9FF';
             
             clearmpaorg = setInterval(changempcorg, 200);
           }
          
           function changempcorg() {
 
          // document.getElementById("peptitea").style.display = "block";
          //  document.getElementById("peptitea1").style.display = "none";
          ////  document.getElementById("peptitea").style.top = 4 + '%';
           // document.getElementById("peptitea").style.left = 51 + '%';
           clearInterval(clearmp1a);
 
           } */

          /*clearInterval(clearmpaorg);

          clearInterval(clearmp1a);*/
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
    function handleMouseUp() {

      isDragging = false;
      imagepp.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      //   imagepp.removeEventListener('touchmove', handleMouseMove);
      //  imagepp.removeEventListener('touchend', handleMouseUp);
      
    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    // imagepp.addEventListener('touchmove', handleMouseMove);
    // imagepp.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  /* function changeColor() {
    document.getElementById("peptitea").style.display = "none";
    document.getElementById("peptitea1").style.display = "block";
    clearmpcnge = setInterval(changemp, 300);

    function changemp() {
      document.getElementById("peptitea").style.display = "block";
      document.getElementById("peptitea1").style.display = "none";
    }
    //imagepp.style.filter = 'hue-rotate(20deg)'; // Change color to green (90 degrees in hue rotation)
  } */

  // Add event listeners for mouse/touch down and click/touch events
  imagepp.addEventListener('mousedown', handleMouseDown);
  //imagepp.addEventListener('touchstart', handleMouseDown);
  //imagepp.addEventListener('click', changeColor);
  //imagepp.addEventListener('touchend', changeColor);

  /*********************************************** Touch sample a********************************************* */

  function handleTouchStart(event) {

    const touch = event.touches[0];
    const boundingRect = imagepp.getBoundingClientRect();

    isDragging = true;

    // Store the initial touch coordinates as properties on the image element
    imagepp.initialTouchX = touch.clientX;
    imagepp.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imagepp.offsetX = touch.clientX - boundingRect.left;
    imagepp.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {

    const touch = event.touches[0];

    if (isDragging) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imagepp.offsetX;
      const imageY = touch.clientY - imagepp.offsetY;

      // Update the position of the image based on touch position
      imagepp.style.left = imageX + 'px';
      imagepp.style.top = imageY + 'px';

      const imageRect = imagepp.getBoundingClientRect();
      const canvasRect = canvassdrop1.getBoundingClientRect();

      

      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop1.style.backgroundColor = '#7FA9FF';
        
      }
    }
  }

  function handleTouchEnd() {

    isDragging = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imagepp.addEventListener('touchstart', handleTouchStart);

}

function sample_loadB() {
  //clearInterval(clearmp1a);
  document.getElementById("peptiteb").style.display = "block";

  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";

  document.getElementById("peptitea1").style.visibility = "hidden";
  document.getElementById("peptitec1").style.visibility = "hidden";
  document.getElementById("peptited1").style.visibility = "hidden";
  document.getElementById('loadsamplec').style.pointerEvents = "auto";
  const imageppb = document.getElementById('peptiteb');
  const canvassdrop2 = document.getElementById('sampledrop2');
  const ctxsdrop2 = canvassdrop2.getContext('2d');
  document.getElementById("tubebo").style.display = "block";
  document.getElementById("tubeb").style.display = "none";
  document.getElementById("tubeao").style.display = "none";
  document.getElementById("tubea").style.display = "block";
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



        if (imageRectb.left + imageRectb.width >= canvasRect2.left && imageRectb.top + imageRectb.height >= canvasRect2.top && imageRectb.left <= canvasRect2.left + canvasRect2.width && imageRectb.top <= canvasRect2.top + canvasRect2.height) {
          // Change the canvas color when the image touches it

          canvassdrop2.style.backgroundColor = '#7FA9FF';
         
          /*  clearInterval(clearmpcnge2);
           
 
           clearmp1a2 = setInterval(changempc2, 200);
 
 
           function changempc2() {
             document.getElementById("peptiteb").style.display = "none";
             document.getElementById("peptiteb1").style.display = "block";
             document.getElementById("peptiteb1").style.top = 190 + '%';
             document.getElementById("peptiteb1").style.left = 14.7 + '%';
             canvassdrop2.style.backgroundColor = '#7FA9FF';
             clearmpaorg2 = setInterval(changempcorg2, 200);
           }
 
           function changempcorg2() {
 
             
              clearInterval(clearmp1a2);
    
              } */

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
    function handleMouseUpb() {
      isDraggingb = false;
      imageppb.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMoveb);
      window.removeEventListener('mouseup', handleMouseUpb);
      // imageppb.removeEventListener('touchmove', handleMouseMoveb);
      //  imageppb.removeEventListener('touchend', handleMouseUpb);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMoveb);
    window.addEventListener('mouseup', handleMouseUpb);
    //imageppb.addEventListener('touchmove', handleMouseMoveb);
    //imageppb.addEventListener('touchend', handleMouseUpb);
  }

  // Function to change the color when clicked/touched
  /* function changeColorb() {
    document.getElementById("peptiteb").style.display = "none";
    document.getElementById("peptiteb1").style.display = "block";
    clearmpcnge2 = setInterval(changemp2, 300);

    function changemp2() {
      document.getElementById("peptiteb").style.display = "block";
      document.getElementById("peptiteb1").style.display = "none";
    }
  } */

  // Add event listeners for mouse/touch down and click/touch events
  imageppb.addEventListener('mousedown', handleMouseDownb);
  //imageppb.addEventListener('touchstart', handleMouseDownb);
  //imageppb.addEventListener('click', changeColorb);
  //imageppb.addEventListener('touchend', changeColorb);
  /*** Sample 2 load ends */

  /*********************************************** Touch sample b********************************************* */

  function handleTouchStart(event) {


    const touch = event.touches[0];
    const boundingRect = imageppb.getBoundingClientRect();

    isDraggingb = true;

    // Store the initial touch coordinates as properties on the image element
    imageppb.initialTouchX = touch.clientX;
    imageppb.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imageppb.offsetX = touch.clientX - boundingRect.left;
    imageppb.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {


    const touch = event.touches[0];

    if (isDraggingb) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imageppb.offsetX;
      const imageY = touch.clientY - imageppb.offsetY;

      // Update the position of the image based on touch position
      imageppb.style.left = imageX + 'px';
      imageppb.style.top = imageY + 'px';

      const imageRect = imageppb.getBoundingClientRect();
      const canvasRect = canvassdrop2.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop2.style.backgroundColor = '#7FA9FF';
      
      }
    }
  }

  function handleTouchEnd() {


    isDraggingb = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imageppb.addEventListener('touchstart', handleTouchStart);

}

function sample_loadC() {
  //clearInterval(clearmp1a2);
  document.getElementById("peptitec").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").style.display = "none";

  document.getElementById("peptitea1").style.visibility = "hidden";
  document.getElementById("peptiteb1").style.visibility = "hidden";
  document.getElementById("peptited1").style.visibility = "hidden";
  document.getElementById('loadsampled').style.pointerEvents = "auto";
  const imageppc = document.getElementById('peptitec');
  const canvassdrop3 = document.getElementById('sampledrop3');
  const ctxsdrop3 = canvassdrop3.getContext('2d');
  document.getElementById("tubeco").style.display = "block";
  document.getElementById("tubec").style.display = "none";
  document.getElementById("tubebo").style.display = "none";
  document.getElementById("tubeb").style.display = "block";
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



        if (imageRectc.left + imageRectc.width >= canvasRect3.left && imageRectc.top + imageRectc.height >= canvasRect3.top && imageRectc.left <= canvasRect3.left + canvasRect3.width && imageRectc.top <= canvasRect3.top + canvasRect3.height) {
          // Change the canvas color when the image touches it
          canvassdrop3.style.backgroundColor = '#7FA9FF';
          
          // clearInterval(clearmpcnge3);

          /*  clearmp1a3 = setInterval(changempc3, 200);
 
 
           function changempc3() {
             document.getElementById("peptitec").style.display = "none";
             document.getElementById("peptitec1").style.display = "block";
             document.getElementById("peptitec1").style.top = 178 + '%';
             document.getElementById("peptitec1").style.left = 14.6 + '%';
             canvassdrop3.style.backgroundColor = '#7FA9FF';
             clearmpaorg3 = setInterval(changempcorg3, 200);
           }
 
           function changempcorg3() {
 
             
             clearInterval(clearmp1a3);
   
             } */


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
      //imageppc.removeEventListener('touchmove', handleMouseMovec);
      // imageppc.removeEventListener('touchend', handleMouseUpc);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMovec);
    window.addEventListener('mouseup', handleMouseUpc);
    // imageppc.addEventListener('touchmove', handleMouseMovec);
    // imageppc.addEventListener('touchend', handleMouseUpc);
  }

  // Function to change the color when clicked/touched
  /* function changeColorc() {
    document.getElementById("peptitec").style.display = "none";
    document.getElementById("peptitec1").style.display = "block";
    clearmpcnge3 = setInterval(changemp3, 300);

    function changemp3() {
      document.getElementById("peptitec").style.display = "block";
      document.getElementById("peptitec1").style.display = "none";
    }
  } */

  // Add event listeners for mouse/touch down and click/touch events
  imageppc.addEventListener('mousedown', handleMouseDownc);
  //imageppc.addEventListener('touchstart', handleMouseDownc);
  //imageppc.addEventListener('click', changeColorc);
  //imageppc.addEventListener('touchend', changeColorc);
  /*** Sample 3 load ends */
  /*********************************************** Touch sample c********************************************* */


  function handleTouchStart(event) {

    const touch = event.touches[0];
    const boundingRect = imageppc.getBoundingClientRect();

    isDraggingc = true;

    // Store the initial touch coordinates as properties on the image element
    imageppc.initialTouchX = touch.clientX;
    imageppc.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imageppc.offsetX = touch.clientX - boundingRect.left;
    imageppc.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {

    const touch = event.touches[0];

    if (isDraggingc) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imageppc.offsetX;
      const imageY = touch.clientY - imageppc.offsetY;

      // Update the position of the image based on touch position
      imageppc.style.left = imageX + 'px';
      imageppc.style.top = imageY + 'px';

      const imageRect = imageppc.getBoundingClientRect();
      const canvasRect = canvassdrop3.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop3.style.backgroundColor = '#7FA9FF';
       
      }
    }
  }

  function handleTouchEnd() {

    isDraggingc = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imageppc.addEventListener('touchstart', handleTouchStart);

}

function sample_loadD() {
  //clearInterval(clearmp1a3);
  document.getElementById("coverele").disabled = false;
  document.getElementById("peptited").style.display = "block";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitea1").style.visibility = "hidden";
  document.getElementById("peptitec1").style.visibility = "hidden";
  document.getElementById("peptiteb1").style.visibility = "hidden";
  document.getElementById("tubedo").style.display = "block";
  document.getElementById("tubed").style.display = "none";
  document.getElementById("tubeco").style.display = "none";
  document.getElementById("tubec").style.display = "block";
  const imageppd = document.getElementById('peptited');
  const canvassdrop4 = document.getElementById('sampledrop4');
  const ctxsdrop4 = canvassdrop4.getContext('2d');
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



        if (imageRectd.left + imageRectd.width >= canvasRect4.left && imageRectd.top + imageRectd.height >= canvasRect4.top && imageRectd.left <= canvasRect4.left + canvasRect4.width && imageRectd.top <= canvasRect4.top + canvasRect4.height) {
          // Change the canvas color when the image touches it
          canvassdrop4.style.backgroundColor = '#7FA9FF';
          document.getElementById("tubedo").style.display = "none";
        document.getElementById("tubed").style.display = "block";
          // clearInterval(clearmpcnge4);
          //canvassdrop1.style.backgroundColor = '#7FA9FF';

          /* clearmp1a4 = setInterval(changempc4, 200);


          function changempc4() {
            document.getElementById("peptited").style.display = "none";
            document.getElementById("peptited1").style.display = "block";
            document.getElementById("peptited1").style.top = 165 + '%';
            document.getElementById("peptited1").style.left = 14.6 + '%';
            canvassdrop4.style.backgroundColor = '#7FA9FF';
            clearmpaorg4 = setInterval(changempcorg4, 200);
          }
          function changempcorg4() {

            
            clearInterval(clearmp1a4);
  
            } */


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
      //imageppd.removeEventListener('touchmove', handleMouseMoved);
      //imageppd.removeEventListener('touchend', handleMouseUpd);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMoved);
    window.addEventListener('mouseup', handleMouseUpd);
    //imageppd.addEventListener('touchmove', handleMouseMoved);
    // imageppd.addEventListener('touchend', handleMouseUpd);
  }

  // Function to change the color when clicked/touched
  /* function changeColord() {
    document.getElementById("peptited").style.display = "none";
    document.getElementById("peptited1").style.display = "block";
    clearmpcnge4 = setInterval(changemp4, 300);

    function changemp4() {
      document.getElementById("peptited").style.display = "block";
      document.getElementById("peptited1").style.display = "none";
    }
  } */

  // Add event listeners for mouse/touch down and click/touch events
  imageppd.addEventListener('mousedown', handleMouseDownd);
  //imageppd.addEventListener('touchstart', handleMouseDownd);
  //imageppd.addEventListener('click', changeColord);
  //imageppd.addEventListener('touchend', changeColord);
  /*** Sample 4 load ends */
  /*********************************************** Touch sample d********************************************* */
  function handleTouchStart(event) {

    const touch = event.touches[0];
    const boundingRect = imageppd.getBoundingClientRect();

    isDraggingd = true;

    // Store the initial touch coordinates as properties on the image element
    imageppd.initialTouchX = touch.clientX;
    imageppd.initialTouchY = touch.clientY;

    // Calculate the offset of the touch point relative to the image
    imageppd.offsetX = touch.clientX - boundingRect.left;
    imageppd.offsetY = touch.clientY - boundingRect.top;

    // Add a touchmove and touchend event listener
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event) {

    const touch = event.touches[0];

    if (isDraggingd) {
      // Use the stored initial touch coordinates to calculate the image position
      const imageX = touch.clientX - imageppd.offsetX;
      const imageY = touch.clientY - imageppd.offsetY;

      // Update the position of the image based on touch position
      imageppd.style.left = imageX + 'px';
      imageppd.style.top = imageY + 'px';

      const imageRect = imageppd.getBoundingClientRect();
      const canvasRect = canvassdrop4.getBoundingClientRect();


      if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
        // Change the canvas color when the image touches it
        canvassdrop4.style.backgroundColor = '#7FA9FF';
        document.getElementById("tubedo").style.display = "none";
        document.getElementById("tubed").style.display = "block";
      }
    }
  }

  function handleTouchEnd() {

    isDraggingd = false;

    // Remove the touchmove and touchend event listeners when dragging is complete
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  imageppd.addEventListener('touchstart', handleTouchStart);


}

/** Move gel to electrophoresis chamber */
var image;
var imageag;
var ctxgs1, ctxgs2, ctxgs3, ctxgs4;
var canvass1, canvass2, canvass3, canvass4;
var canvaside1, canvasside2, canvasside3, canvasside4;
var ctxs1, ctxs2, ctxs3, ctxs4;
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
  document.getElementById("wells").style.display = "none";
  //imageag.style.display="block";
  //image1.style.display = "block";
  //image.style.transform=`translate(${topimg}%, ${lefting}%)`;
  /* if((top == 95) && (left = 11)){
    
    
  } */
  document.getElementById('sampledrop1').style.display = "block";
  document.getElementById('sampledrop2').style.display = "block";
  document.getElementById('sampledrop3').style.display = "block";
  document.getElementById('sampledrop4').style.display = "block";

  document.getElementById('myCanvass1A').style.display = "block";
  document.getElementById('myCanvass2B').style.display = "block";
  document.getElementById('myCanvass3C').style.display = "block";
  document.getElementById('myCanvass4D').style.display = "block";

  document.getElementById("s1").disabled = false;
  document.getElementById("s2").disabled = false;
  document.getElementById("s4").disabled = false;
  document.getElementById("s5").disabled = false;

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
  document.getElementById('agel1a').style.display = "none";
  document.getElementById('samplea').style.display = "none";
  document.getElementById('sampleb').style.display = "none";
  document.getElementById('samplec').style.display = "none";
  document.getElementById('sampled').style.display = "none";
  document.getElementById('sampledrop1').style.display = "none";
  document.getElementById('sampledrop2').style.display = "none";
  document.getElementById('sampledrop3').style.display = "none";
  document.getElementById('sampledrop4').style.display = "none";
  document.getElementById("viewsample").disabled = false;
  document.getElementById('agel1a').style.opacity = "0";

  /*  ctxgs1.clearRect(0, 0, canvass1.width, canvass1.height);
   ctxgs2.clearRect(0, 0, canvass2.width, canvass2.height);
   ctxgs3.clearRect(0, 0, canvass3.width, canvass3.height);
   ctxgs4.clearRect(0, 0, canvass4.width, canvass4.height); */

}

/**************************************************** Loads buffer in the electophoresis chamber **********************************************************************************/


function addbuffer() {
  document.getElementById("sampleload").disabled = false;

  document.getElementById("bufferload").disabled = true;


  //document.getElementById("addbuffer").disabled = true;

  /**side 1 */
  canvaside1 = document.getElementById("myCanvass1");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 135;
  var speed = 1;

  function drawLine() {

    ctxs1.strokeStyle = '#CCFFFF ';
    ctxs1.globalAlpha = 0.03;
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

    ctxs2.strokeStyle = '#CCFFFF ';
    ctxs2.globalAlpha = 0.03;
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

    ctxs3.strokeStyle = '#CCFFFF '; /*E0FCFF*/
    ctxs3.globalAlpha = 0.03;
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

    ctxs4.strokeStyle = '#CCFFFF ' //'#D0F7FF';
    ctxs4.globalAlpha = 0.03;
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
  window.scrollBy(0, 500);

  setInterval(fillbuffer, 2000);

  function fillbuffer() {
    document.getElementById("bufferloadimg").style.display = "block";
    document.getElementById("bufferintopimg").style.display = "block";
    document.getElementById('agel1a').style.display = "block";
  }

}

/******************************************************* Load Sample  *****************************************************************/



function voltclick() {

  document.getElementById('myCanvasvp').style.display = "block";

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

var volt = 0;
function voltinc() {
  volt = volt + 10;
  const canvas = document.getElementById('textvoltimer');
  document.getElementById('myCanvasvn').style.display = "block";

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

function coverelecham() {
  //clearInterval(clearmp1a4);
  document.getElementById("gelrun").disabled = false;
  document.getElementById("casecoverimg").style.display = "block";
  document.getElementById("coverele").disabled = true;
  document.getElementById("sampleload").disabled = true;
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  scrollBy(0, 700);
}

/**************************************************** On click running of gel button voltmer buttons get activated **********************************************************************************/

function run_gel() {
  document.getElementById('myCanvasv1').style.display = "block";
  document.getElementById('myCanvast1').style.display = "block";

  document.getElementById('myCanvasrn').style.display = "block";
  // document.getElementById("sampleload").disabled = true;
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("gelrun").disabled = true;
  document.getElementById("casecoverimg").style.display = "block";


}


/**************************************************** Ruuning sample in gel  **********************************************************************************/


function runninggel() {


  if (volt == null) {
    $('#voltalertmessage').modal('show');
    $('.modal-body').text('Give input voltage between 50V and 100 V.');
    //alert("Give input  between 50V and 100 V.")
  }
  else if ((volt < 49) || (volt > 101)) {
    //alert("Give input  between 50V and 100 V.")
    $('#voltalertmessage').modal('show');
    $('.modal-body').text('Give input voltage between 50V and 100 V.');
  }
  else {
    document.getElementById("myCanvasstp").style.display = "block";

    gelrun();
  }

}


function delvolttimer() {
  document.getElementById("voltalertmessage").style.display = "none";
  document.getElementById("voltalertmessage").classList.remove("show");

}



var imgobj1 = null;
var imgobj2 = null;
var imgobj3 = null;
var imgobj4 = null;

function gelrun() {


  document.getElementById('sampledrop1').style.display = "none";
  document.getElementById('sampledrop2').style.display = "none";
  document.getElementById('sampledrop3').style.display = "none";
  document.getElementById('sampledrop4').style.display = "none";

  document.getElementById("samplea").style.display = "block";
  var canvassd1 = document.getElementById("samplea");
  var orgleft = 15; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame1, 100); /* frame is 5 denotes the speed of the movement*/
  function frame1() {
    if (orgleft == 26) { /* moves to 26 left positon*/
      clearInterval(imgobj1); /* stops to 26 postion*/

      //
    } else {
      orgleft++;
      canvassd1.style.left = orgleft + '%';



    }
  }


  document.getElementById("sampleb").style.display = "block";
  var canvassd2 = document.getElementById("sampleb");
  var orgleft2 = 15; /* initial position */
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame2, 100); /* frame is 5 denotes the speed of the movement*/
  function frame2() {
    if (orgleft2 == 26) { /* moves to 26 left positon*/
      clearInterval(imgobj2); /* stops to 26 postion*/

    } else {
      orgleft2++;
      canvassd2.style.left = orgleft2 + '%';



    }
  }

  document.getElementById("samplec").style.display = "block";
  var canvassd3 = document.getElementById("samplec");
  var orgleft3 = 15; /* initial position */
  clearInterval(imgobj3);
  imgobj3 = setInterval(frame3, 100); /* frame is 5 denotes the speed of the movement*/
  function frame3() {
    if (orgleft3 == 26) { /* moves to 26 left positon*/
      clearInterval(imgobj3); /* stops to 26 postion*/

    } else {
      orgleft3++;
      canvassd3.style.left = orgleft3 + '%';



    }
  }

  document.getElementById("sampled").style.display = "block";
  var canvassd4 = document.getElementById("sampled");
  var orgleft4 = 15; /* initial position */
  clearInterval(imgobj4);
  imgobj4 = setInterval(frame4, 100); /* frame is 5 denotes the speed of the movement*/
  function frame4() {
    if (orgleft4 == 26) { /* moves to 26 left positon*/
      clearInterval(imgobj4); /* stops to 26 postion*/

    } else {
      orgleft4++;
      canvassd4.style.left = orgleft4 + '%';



    }
  }




  /* document.getElementById("sampledrop1").style.display="block";
  var canvassd1 = document.getElementById("sampledrop1");
  var orgwidht = 0; /* initial position */
  /*clearInterval(imgobj1);
  imgobj1 = setInterval(frame1, 100); /* frame is 5 denotes the speed of the movement*/
  /*function frame1() {
    if (orgwidht == 12) { 
      clearInterval(imgobj1); 
      
    } else {
      orgwidht++; 
      canvassd1.style.width = orgwidht + '%'; 
     
  
       
    }
  } */












}

/**************************************************** View under UV light **********************************************************************************/

var canvasuv1, canvasuv2;
var ctxuv1, ctxuv2;
function view_sample_UVlight() {
  window.scrollBy(0, 1000);
  document.getElementById("sampleload").disabled = true;
  document.getElementById("gelrun").disabled = true;
  document.getElementById("myCanvasrn").style.display = "none";
  document.getElementById("viewsample").disabled = true;
  document.getElementById("output").style.display = "block";
  document.getElementById("ladder").style.display = "block";
  document.getElementById("agel1").style.display = "none";
  document.getElementById('sampledrop1').style.display = "none";
  document.getElementById('sampledrop2').style.display = "none";
  document.getElementById('sampledrop3').style.display = "none";
  document.getElementById('sampledrop4').style.display = "none";

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

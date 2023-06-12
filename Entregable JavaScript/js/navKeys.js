document.addEventListener("keyup", function(event){
    const maybeLink =  document.querySelector(`a.nav-link[data-key="${event.key}"]`);
     if (maybeLink) {maybeLink.click()};
 })


 //viewport 
 var seccion1 = document.getElementById("we");
 var seccion2 = document.getElementById("services");
 var seccion3 = document.getElementById("portfolio");
 var seccion4 = document.getElementById("location");
 var seccion5 = document.getElementById("contact");
 
 var distance1 = seccion1.getBoundingClientRect();
 var distance2 = seccion2.getBoundingClientRect();
 var distance3 = seccion3.getBoundingClientRect();
 var distance4 = seccion4.getBoundingClientRect();
 var distance5 = seccion5.getBoundingClientRect();



//Scroll con N y P 
let sectionPoint = 0; 
CalcViewPoint(); //calcula que sesion esta visualizando cuando carga la pagina



 //Detecto si presione P o N
 document.addEventListener("keyup", function(event){
  if (event.key == "p"){
    //console.log("Presiono P" + sectionPoint);
   if (sectionPoint >= 2) {
      sectionPoint -= 1;
    } else {
      sectionPoint = 1;
    }
    let maybeLink =  document.querySelector(`a.nav-link[data-key="${sectionPoint}"]`);
    maybeLink.click()
    //moverse a la seccion previa

  } else if (event.key == "n"){
    //console.log("Presiono N" + sectionPoint);
   if (sectionPoint <= 4){
      sectionPoint += 1;
    } else {
      sectionPoint = 5;
    }
    
    let maybeLink =  document.querySelector(`a.nav-link[data-key="${sectionPoint}"]`);
    maybeLink.click()
    //Moverse a la siguiente seccion
  }
})


function CalcViewPoint() {
  let vectorDist = [];
 
  distance1 = seccion1.getBoundingClientRect().top;
  distance2 = seccion2.getBoundingClientRect().top;
  distance3 = seccion3.getBoundingClientRect().top;
  distance4 = seccion4.getBoundingClientRect().top;
  distance5 = seccion5.getBoundingClientRect().top;
 
  vectorDist = [distance1, distance2, distance3, distance4, distance5];
  //console.log(vectorDist)
  for(let pos = 0; pos < vectorDist.length; pos++){
   /* 
Si la distancia del top esta entre -200 a 200 esta es en la seccion que este
*/
    if ( vectorDist[pos]> -250 && vectorDist[pos] <400 ){
      sectionPoint = pos + 1;
    
    }
  }
  
} 


// Capturo cuando finaliza el scroll

function noScroll (callback, refresh = 100) {
  if (!callback || typeof callback !== 'function') return;
  let isScrolling;
  window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(callback, refresh);
  }, false);
}

noScroll(function () {
  
 CalcViewPoint();
 
});

 
 document.querySelectorAll
 for (let input of document.querySelectorAll("input, textarea")){
     input.addEventListener("keyup",function(evente){evente.stopPropagation()});//un evento en este input no lo propaga hacia arriba y no llega a document para que se me cambie
 };
 
 for (let input of document.querySelectorAll("input[type=tel]")){
     input.addEventListener("keydown", function(event){
         if (isNaN(parseInt(event.key))) {
             event.preventDefault();
         }
         
     })
 };
 
 // MOSTRAR UN HELP apretando h
 let statusModal = 0;
 let time;
 document.addEventListener("keyup", function(event){
     const maybeLink =  event.key;
     
     //console.log(maybeLink);
      if (maybeLink == "h") {
         if (statusModal == 0){
         showModal();
         } else {
          closeModal();
         }
      };
  })
 
  let showModal = function () {
     let modal = document.querySelector(`[aria-label=navigationHelp]`);
     modal.classList.add('show');
     modal.style.display='block';
     modal.style.paddingLeft = 0;
     modal.innerHTML= modalContent;
     clearTimeout(time); 
     time = setTimeout(()=>{closeModal()},20000);
     statusModal = 1;
  }

  let closeModal = function () {
    let modal = document.querySelector(`[aria-label=navigationHelp]`);
    modal.classList.remove('show');
    modal.innerHTML = "";
    clearTimeout(time);
    statusModal= 0; 
  }
  
 let modalContent = `<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header mx-auto">
     <h5 class="modal-title">Navegacion por Teclado</h5>
   </div>
   <div class="modal-body mx-auto">
   <h5 class="modal-title">Referencias:</h5><br>
     <p><b>Open / Close Modal: </b> Press "H" </p>
     <p>Press "1" to go <b>Seccion 1 - Who We Are?:</b></p>
     <p>Press "2" to go <b>Seccion 2 - Services:</b></p>
     <p>Press "3" to go <b>Seccion 3 - Portfolio:</b></p>
     <p>Press "4" to go <b>Seccion 4 - Location:</b></p>
     <p>Press "5" to go <b>Seccion 5 - Email Us:</b></p>
     </div>
     <div class="modal-body mx-auto">
     <p><b>Next Seccion</b> Press "N"</p>
     <p><b>Previous Seccion</b> Press "P"</p>
     
   </div>
 </div>
 </div>`; 










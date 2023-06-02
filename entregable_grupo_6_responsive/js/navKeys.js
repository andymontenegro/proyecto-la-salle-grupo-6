document.addEventListener("keyup", function(event){
    const maybeLink =  document.querySelector(`a.nav-link[data-key="${event.key}"]`);
     if (maybeLink) {maybeLink.click()};
 })

 //Detecto si presione P o N
 document.addEventListener("keyup", function(event){
  if (event.key == "p"){
    console.log("Presiono P");
    //moverse a la seccion previa

  } else if (event.key == "n"){
    console.log("Presiono N");
    //Moverse a la siguiente seccion
  }
})

 
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
 document.addEventListener("keyup", function(event){
     const maybeLink =  event.key;
     
     //console.log(maybeLink);
      if (maybeLink == "h") {
         if (statusModal == 0){
         showModal();
         statusModal = 1;
         } else {
          closeModal();
          statusModal= 0;
         }
      };
  })
 
  let showModal = function () {
     let modal = document.querySelector(`[aria-label=navigationHelp]`);
     modal.classList.add('show');
     modal.style.display='block';
     modal.style.paddingLeft = 0;
     modal.innerHTML= modalContent;
  }

  let closeModal = function () {
    let modal = document.querySelector(`[aria-label=navigationHelp]`);
    modal.classList.remove('show');
    modal.innerHTML = ""; 
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


 //viewport 
var seccion1 = document.getElementById("we");
var seccion2 = document.getElementById("services");
var seccion3 = document.getElementById("portfolio");
var seccion4 = document.getElementById("location");
var seccion5 = document.getElementById("contact");

var distance = seccion4.getBoundingClientRect();

console.log("Distancia: " + distance.)


function isInViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return (
      distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
  );
}

if (isInViewport(seccion1)) {
  // está en el viewport
  console.log("Seccion 1 en vierport");
}


 // https://desarrolloweb.com/faq/como-saber-si-un-elemento-esta-en-el-viewport
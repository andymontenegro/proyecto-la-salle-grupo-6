document.addEventListener("keyup", function(event){
    const maybeLink =  document.querySelector(`a.nav-link[data-key="${event.key}"]`);
     if (maybeLink) {maybeLink.click()};
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
 document.addEventListener("keyup", function(event){
     const maybeLink =  event.key;
     //console.log(maybeLink);
      if (maybeLink == "h") {
         
         showModal();
      };
  })
 
  let showModal = function () {
     let modal = document.querySelector(`[aria-label=navigationHelp]`);
     modal.classList.add('show');
     modal.style.display='block';
     modal.style.paddingLeft = 0;
     modal.innerHTML= modalContent;
  }
  
 let modalContent = `<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h5 class="modal-title">Navegacion por Teclado</h5>
     <p><b>Open / Close: </b> Press "h" </p>
   </div>
   <div class="modal-body">
   <h5 class="modal-title">Referencias:</h5><br>
     <p><b>Seccion 1 - :</b> Press "1"</p>
     <p><b>Seccion 2:</b> Press "2"</p>
     <p><b>Seccion 3:</b> Press "3"</p>
     <p><b>Seccion 4:</b> Press "4"</p>
     <p><b>Seccion 5:</b> Press "5"</p>

     <p><b>Seccion 5:</b> Press "5"</p>
     <p><b>Seccion 5:</b> Press "5"</p>
     <p><b>Seccion 5:</b> Press "5"</p>
   </div>
 </div>
 </div>`; 


 //viewport 